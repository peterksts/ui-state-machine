import {
  Directive,
  HostListener,
  Input,
  OnInit,
  ElementRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  Type
} from '@angular/core';
import {jsPlumb, jsPlumbInstance} from 'jsplumb';

import { Store } from '../models/store.model';
import { Minimap } from '../models/minimap.model';
import { DataSourceService } from '../services/data-source.service';
import { Task } from '../models/task.model';
import { UbixTaskComponent } from '../components/ubix-task/ubix-task.component';
import {ComponentRef} from '@angular/core/src/linker/component_factory';

@Directive({
  selector: '[app-flow-editor-directive]',
})
export class FlowEditorDirective implements OnInit {

  @Input() store: Store;
  @Input() miniMap: Minimap;
  @Input() viewContainerRef: ViewContainerRef;

  private jsPlumbInstance: jsPlumbInstance;
  private mapUbixTask: {[key: string]: ComponentRef<UbixTaskComponent>} = {};

  // private mapSwimLane: {[key: string]: Swimlane} = {};
  // private nameSwimlane = 'swimlane';
  // private listSwimLaneName: string[] = [];

  constructor(private el: ElementRef,
              private resolver: ComponentFactoryResolver,
              private dataSource: DataSourceService) {
  }

  ngOnInit(): void {
    this.jsPlumbInstance = jsPlumb.getInstance({
      DragOptions: {cursor: 'pointer', zIndex: 2000},
      ConnectionOverlays: [
        ['Arrow', {
          location: 1,
          visible: true,
          width: 11,
          length: 11,
          id: 'ARROW',
          events: {}
        }],
        ['Label', {
          location: 0.1,
          id: 'label',
          cssClass: 'aLabel',
          events: {}
        }]
      ],
      Container: this.el.nativeElement.id
    });

    // mini-map scrolling to flow-editor-map
    this.miniMap.setEventListenerMiniMapView((percentPosition: { percentX: number, percentY: number }) => {
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

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    if (!this.store || this.store.type !== 'new_ubix_task') {
      return;
    }

    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    if (!this.store || this.store.type !== 'new_ubix_task') {
      return;
    }
    const position = this.getPositionMouse(event);
    event.preventDefault();
    this.createNewTask(this.store.data, {x: position.x, y: position.y, type: 'mouse'});
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    this.miniMap.shift(event.target.scrollLeft,
      event.target.scrollTop,
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight);
  }

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

  private setPositionScroll(percentX: number, percentY: number) {
    this.el.nativeElement.scrollLeft = (this.el.nativeElement.scrollWidth / 100) * percentX;
    this.el.nativeElement.scrollTop = (this.el.nativeElement.scrollHeight / 100) * percentY;
  }

  // CREATE TASK
  // createNewTask and add in mapUbixTask new task
  private createNewTask(config: any, pos?: any) {
    const newTaskId = 'task-' + new Date().getTime();
    const factories = Array.from(this.resolver['_factories'].keys());
    const factoryClass = <Type<UbixTaskComponent>> factories.find((factory: any) => factory.name === 'UbixTaskComponent');
    const taskComponentFactory = this.resolver.resolveComponentFactory(factoryClass);
    const taskComponentRef = this.viewContainerRef.createComponent(taskComponentFactory, -1, this.viewContainerRef.injector);
    // set input
    taskComponentRef.instance.id = newTaskId;
    taskComponentRef.instance.config = config;
    taskComponentRef.instance.position = pos;
    taskComponentRef.instance.jsPlumbInstance = this.jsPlumbInstance;
    taskComponentRef.instance.onDeleteTask = this.deleteTask;
    taskComponentRef.instance.onMoveTask = this.moveTask;
    taskComponentRef.instance.onCreateTask = this.createTask;
    taskComponentRef.instance.el = taskComponentRef.location;
    taskComponentRef.instance.elViewRef = taskComponentRef.hostView;
    taskComponentRef.instance.init();
    this.mapUbixTask[taskComponentRef.instance.id] = taskComponentRef;
  }

  private deleteTask = (id: string) => {
  }

  private moveTask = (id: string, positionX: number, positionY: number) => {
    this.miniMap.setPositionTaskInPercent(id,
      positionX / (this.el.nativeElement.scrollWidth / 100),
      positionY / (this.el.nativeElement.scrollHeight / 100));
  }

  private createTask = (task: HTMLElement, positionX: number, positionY: number, config: Task): void => {
    this.miniMap.addTask(task, positionX / (this.el.nativeElement.scrollWidth / 100),
      positionY / (this.el.nativeElement.scrollHeight / 100),
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight,
      config);
  }

  // TOOLS
  private getPositionMouse(event): { x: number, y: number } {
    const posMouseX = event.offsetX === undefined ? event.layerX : event.offsetX;
    const posMouseY = event.offsetY === undefined ? event.layerY : event.offsetY;
    const posScrollLeft = event.target.scrollLeft;
    const posScrollTop = event.target.scrollTop;
    return {x: posMouseX + posScrollLeft, y: posMouseY + posScrollTop};
  }
}
