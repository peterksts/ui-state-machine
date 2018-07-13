import {
  Directive,
  HostListener,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Type
} from '@angular/core';
import { jsPlumb, jsPlumbInstance } from 'jsplumb';

import { Store } from '../models/store.model';
import { Minimap } from '../models/minimap.model';
import { Swimlane } from '../models/swimlane.model';
import { DataSourceService } from '../services/data-source.service';
import { Task } from '../models/task.model';
import {UbixTaskComponent} from '../components/ubix-task/ubix-task.component';
import {ComponentRef} from '@angular/core/src/linker/component_factory';

enum EditorMode {
  Creating,
  Panning,
  Zooming
}

@Directive({
  selector: '[app-flow-editor-directive]',
})
export class FlowEditorDirective implements OnInit {

  @Input() store: Store;
  @Input() miniMap: Minimap;

  private jsPlumbInstance: jsPlumbInstance;
  private nameTask = 'ubix-task';
  private mapSwimLane: {[key: string]: Swimlane} = {};
  private nameSwimlane = 'swimlane';
  private listSwimLaneName: string[] = [];

  constructor(private el: ElementRef,
              private viewContainerRef: ViewContainerRef,
              private resolver: ComponentFactoryResolver,
              private dataSource: DataSourceService
  ) { }

  ngOnInit(): void {
    this.jsPlumbInstance = jsPlumb.getInstance({
      DragOptions: { cursor: 'pointer', zIndex: 2000 },
      ConnectionOverlays: [
        ['Arrow', {
          location: 1,
          visible: true,
          width: 11,
          length: 11,
          id: 'ARROW',
          events: {
            click: function () {
            }
          }
        }],
        ['Label', {
          location: 0.1,
          id: 'label',
          cssClass: 'aLabel',
          events: {
            tap: function () {
            }
          }
        }]
      ],
      Container: this.el.nativeElement.id
    });

    // mini-map scrolling to flow-editor-map
    this.miniMap.setEventListenerMiniMapView((percentPosition: {percentX: number, percentY: number}) => {
      this.setPositionScroll(percentPosition.percentX, percentPosition.percentY);
    });
    // set size mini-map view
    this.resizeMiniMapView();
    // jsPlumbInstance add bind
    this.addBindJsPlumb();
  }

  // JS PLUMB
  private addBindJsPlumb(): void {
    this.jsPlumbInstance.bind('connection', (info) => {
      this.miniMap.addConnect(info.sourceEndpoint.id, info.targetEndpoint.id);
    });
    this.jsPlumbInstance.bind('connectionDetached', (info) => {
      this.miniMap.deleteConnect(info.sourceEndpoint.id, info.targetEndpoint.id);
    });
    this.jsPlumbInstance.bind('connectionMoved', (info) => {
      this.miniMap.deleteConnect(info.originalSourceEndpoint.id, info.originalTargetEndpoint.id);
    });
  }

  // DRAG AND DROP
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    if (!this.store || this.store.type !== 'new_ubix_task') { return; }

    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    if (!this.store || this.store.type !== 'new_ubix_task') { return; }
    const position = this.getPositionMouse(event);
    event.preventDefault();
    this.createNewTask(this.store.data, {x: position.x, y: position.y, type: 'mouse'});
  }

  // SCROLLING
  @HostListener('scroll', ['$event'])
  onScroll(event) {
    this.miniMap.shift(event.target.scrollLeft,
      event.target.scrollTop,
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight);
  }

  // SIZE
  @HostListener('window:resize')
  onWindowResize() {
    this.resizeMiniMapView();
  }

  private resizeMiniMapView(): void {
    const rectMap = this.el.nativeElement.getBoundingClientRect();
    this.miniMap.setSizeMiniMapView(rectMap.right - rectMap.left,
      rectMap.bottom - rectMap.top,
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight);
  }

  // set position scroll in percent
  private setPositionScroll(percentX: number, percentY: number) {
    this.el.nativeElement.scrollLeft = (this.el.nativeElement.scrollWidth / 100) * percentX;
    this.el.nativeElement.scrollTop = (this.el.nativeElement.scrollHeight / 100) * percentY;
  }

  // TASK CONTROL
  private deleteTask = (id: string): void => {};

  private moveTask = (id: string, positionX: number, positionY: number): void => {
    this.miniMap.setPositionTaskInPercent(id,
      positionX / (this.el.nativeElement.scrollWidth / 100),
      positionY / (this.el.nativeElement.scrollHeight / 100));
  };

  private createTask = (task: HTMLElement, positionX: number, positionY: number, config: Task): void => {
    this.miniMap.addTask(task, positionX / (this.el.nativeElement.scrollWidth / 100),
      positionY / (this.el.nativeElement.scrollHeight / 100),
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight,
      config);
  };

  // CREATE TASK
  // createNewTask and return id element new task
  private createNewTask(config: any, pos?: any): string {
    const newTaskId = 'task-' + new Date().getTime();
    //
    const factories = Array.from(this.resolver['_factories'].keys());
    const factoryClass = <Type<any>> factories.find((factory: any) => factory.name === 'UbixTaskComponent');
    const taskComponentFactory = this.resolver.resolveComponentFactory(factoryClass);
    debugger;
    const taskComponentRef = this.viewContainerRef.createComponent(taskComponentFactory);
    // set input
    (<UbixTaskComponent>taskComponentRef.instance).id = newTaskId;
    (<UbixTaskComponent>taskComponentRef.instance).config = config;
    (<UbixTaskComponent>taskComponentRef.instance).position = pos;
    (<UbixTaskComponent>taskComponentRef.instance).jsPlumbInstance = this.jsPlumbInstance;
    (<UbixTaskComponent>taskComponentRef.instance).onDeleteTask = this.deleteTask;
    (<UbixTaskComponent>taskComponentRef.instance).onMoveTask = this.moveTask;
    (<UbixTaskComponent>taskComponentRef.instance).onCreateTask = this.createTask;
    (<UbixTaskComponent>taskComponentRef.instance).el = taskComponentRef.location;
    (<UbixTaskComponent>taskComponentRef.instance).init();
    return newTaskId;
  }

  private addMoveTask(elemet: HTMLElement): void {
    elemet.addEventListener('mousedown', (e) => {
      let mouseStartX = e.clientX;
      let mouseStartY = e.clientY;

      const moveTask = (even): void => {
        const startPositionX = parseInt(elemet.style.left.slice(0, elemet.style.left.length - 2), null);
        const startPositionY = parseInt(elemet.style.top.slice(0, elemet.style.top.length - 2), null);
        let newPositionX = startPositionX;
        let newPositionY = startPositionY;
        // set new X position
        if (even.clientX > mouseStartX) {
          newPositionX = startPositionX + (even.clientX - mouseStartX);
        }
        if (even.clientX < mouseStartX) {
          newPositionX = startPositionX - (mouseStartX - even.clientX);
        }
        // set new Y position
        if (even.clientY > mouseStartY) {
          newPositionY = startPositionY + (even.clientY - mouseStartY);
        }
        if (even.clientY < mouseStartY) {
          newPositionY = startPositionY - (mouseStartY - even.clientY);
        }
        // set position
        mouseStartX = even.clientX;
        mouseStartY = even.clientY;
        elemet.style.left = newPositionX + 'px';
        elemet.style.top = newPositionY + 'px';
        this.jsPlumbInstance.repaintEverything();
        // set position task mini-map
        this.miniMap.setPositionTaskInPercent(elemet.id,
          newPositionX / (this.el.nativeElement.scrollWidth / 100),
          newPositionY / (this.el.nativeElement.scrollHeight / 100));
      };

      // mouse move
      this.el.nativeElement.addEventListener('mousemove', moveTask);
      // mouse up
      this.el.nativeElement.addEventListener('mouseup', () => {
        this.el.nativeElement.removeEventListener('mousemove', moveTask);
      });
    });
  }

  // TOOLS
  private getPositionMouse(event): {x: number, y: number} {
    const posMouseX = event.offsetX === undefined ? event.layerX : event.offsetX;
    const posMouseY = event.offsetY === undefined ? event.layerY : event.offsetY;
    const posScrollLeft = event.target.scrollLeft;
    const posScrollTop = event.target.scrollTop;
    return {x: posMouseX + posScrollLeft, y: posMouseY + posScrollTop};
  }
}
