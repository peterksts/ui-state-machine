import {
  Component, ComponentFactoryResolver, ElementRef, HostListener,
  Input,
  OnInit, Type, ViewChild, ViewContainerRef
} from '@angular/core';

import { jsPlumb, jsPlumbInstance } from '../../../../ubix_module/jsplumb';
import { jsPlumbConfig } from './jsplumb-config.model';

import { Store } from '../../models/store.model';
import { Minimap } from '../../models/minimap.model';
import { ComponentRef } from '@angular/core/src/linker/component_factory';
import { UbixTaskComponent } from '../ubix-task/ubix-task.component';
import { Task } from '../../models/task.model';
import { DataSourceService } from '../../services/data-source.service';

@Component({
  selector: 'app-flow-builder',
  templateUrl: './flow-builder.component.html',
  styleUrls: ['./flow-builder.component.css']
})
export class FlowBuilderComponent implements OnInit {

  @Input() store: Store;

  private miniMap: Minimap;
  private jsPlumbInstance: jsPlumbInstance;
  private listUbixTask: ComponentRef<UbixTaskComponent>[] = [];
  private selectUbixTask: UbixTaskComponent[];

  @ViewChild('flowBuilderArea', { read: ViewContainerRef })
  public viewContainerRef: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver,
              private el: ElementRef,
              private dataSource: DataSourceService) {
  }

  ngOnInit(): void {
    // set defaults settings
    this.el.nativeElement.id = 'flow-builder';
    this.el.nativeElement.setAttribute('class', 'flow-builder');

    // JS-PLUMB
    // set defaults config jsPlumb
    const plumbConfig = jsPlumbConfig;
    plumbConfig.Container = this.el.nativeElement.id; // set container
    this.jsPlumbInstance = jsPlumb.getInstance(plumbConfig);

    // jsPlumbInstance add bind
    this.addBindJsPlumb();

    // MINI-MAP
    // init mini-map
    this.miniMap = new Minimap('minimap', 'minimap-view');

    // mini-map scrolling to flow-editor-map
    this.miniMap.setEventListenerMiniMapView((percentPosition: { percentX: number, percentY: number }) => {
      this.setPositionScroll(percentPosition.percentX, percentPosition.percentY);
    });

    // set size mini-map view
    this.resizeMiniMapView();
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
    this.jsPlumbInstance.bind('connectionDrag', (info) => {
      if (this.listUbixTask) {
        let component: UbixTaskComponent;
        this.listUbixTask.forEach((task) => {
          task.instance.selectedTaskOff();
          if (task.instance.id === info.sourceId) {
            component = task.instance;
            task.instance.selectedTask();
          }
        });
        if (component) {
          const list = [];
          list.push(component);
          this.selectUbixTask = list;
        }
      }
    });
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event) {
    if (event.target !== this.el.nativeElement) {
      return;
    }
    if (this.selectUbixTask) {
      this.selectUbixTask.forEach((task) => {
        task.selectedTaskOff();
      });
      this.selectUbixTask = null;
    }
  }

  @HostListener('dragover', ['$event'])
  dragOver(event) {
    if (!this.store || this.store.type !== 'new_ubix_task') {
      return;
    }

    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  drop(event) {
    if (!this.store || this.store.type !== 'new_ubix_task') {
      return;
    }
    const position = this.getMousePosition(event);
    event.preventDefault();
    this.createNewTask(this.store.data, {x: position.x, y: position.y, type: 'mouse'});
  }

  @HostListener('scroll', ['$event'])
  scroll(event) {
    this.miniMap.shift(event.target.scrollLeft,
      event.target.scrollTop,
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight);
  }

  @HostListener('window:resize')
  windowResize() {
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

  // TASK
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
    taskComponentRef.instance.onSelectedTask = this.selectedTask;
    taskComponentRef.instance.el = taskComponentRef.location;
    taskComponentRef.instance.elViewRef = taskComponentRef.hostView;
    taskComponentRef.instance.init();
    this.listUbixTask.push(taskComponentRef);
  }

  private deleteTask = (id: string) => {
    if (this.listUbixTask) {
      this.listUbixTask.forEach((task, index) => {
        if (task.instance.id === id) {
          delete this.listUbixTask[index];
        }
      });
    }
    // TODO: delete task in mini-map
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

  private selectedTask = (event: UbixTaskComponent): void => {
    if (this.selectUbixTask) {
      if (this.selectUbixTask[this.selectUbixTask.length - 1].id === event.id) {
        return;
      }
      this.selectUbixTask.forEach((task) => {
        task.selectedTaskOff();
      });
    }
    const list = [];
    list.push(event);
    this.selectUbixTask = list;
  }

  // TOOLS
  private getMousePosition(event): { x: number, y: number } {
    const posMouseX = event.offsetX === undefined ? event.layerX : event.offsetX;
    const posMouseY = event.offsetY === undefined ? event.layerY : event.offsetY;
    const posScrollLeft = event.target.scrollLeft;
    const posScrollTop = event.target.scrollTop;
    return {x: posMouseX + posScrollLeft, y: posMouseY + posScrollTop};
  }
}
