import {
  Component, ComponentFactoryResolver, ElementRef, HostListener,
  Input,
  OnInit, Type, ViewChild, ViewContainerRef
} from '@angular/core';

import { jsPlumb, jsPlumbInstance } from '../../../../ubix_module/jsplumb';
import { jsPlumbConfig } from './jsplumb-config.model';

import { Store } from '../../models/store.model';
import { ComponentRef } from '@angular/core/src/linker/component_factory';
import { UbixTaskComponent } from '../ubix-task/ubix-task.component';
import { ITaskTemplate } from '../../models/task.model';
import { DataSourceService } from '../../services/data-source.service';
import { AddEndpointInputPorts, AddEndpointOutputPorts } from '../../services/tools.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-flow-builder',
  templateUrl: './flow-builder.component.html',
  styleUrls: ['./flow-builder.component.css']
})
export class FlowBuilderComponent implements OnInit {

  @Input() store: Store;

  private jsPlumbInstance: jsPlumbInstance;
  private listUbixTask: ComponentRef<UbixTaskComponent>[] = [];
  private selectUbixTask: UbixTaskComponent[];
  // MINI-MAP
  private jsPlumbInstanceMinimap: jsPlumbInstance;
  private suffixForIdTaskMinimap = '_mini-map-task';
  private positionMiniMap: {x: number, y: number} = {x: 20, y: 20};
  public getMinimapBoundingClientRect = (): ClientRect | DOMRect => {
    return this.minimapElementRef.nativeElement.getBoundingClientRect();
  }
  public moveMinimapView = (percentPosition: { percentX: number, percentY: number }): void => {
    this.setPositionScroll(percentPosition.percentX, percentPosition.percentY);
  }

  @ViewChild('flowBuilderArea', { read: ViewContainerRef })
  public viewContainerRef: ViewContainerRef;

  @ViewChild('minimap')
  private minimapElementRef: ElementRef;

  @ViewChild('minimapView')
  private minimapViewElementRef: ElementRef;

  constructor(private resolver: ComponentFactoryResolver,
              private el: ElementRef,
              private dataSource: DataSourceService,
              private taskService: TaskService,
  ) {
  }

  ngOnInit(): void {
    // set defaults settings
    this.el.nativeElement.id = 'flow-builder';
    this.el.nativeElement.setAttribute('class', 'flow-builder');

    // JS-PLUMB
    // set defaults taskTemplate jsPlumb
    const plumbConfig = jsPlumbConfig;
    plumbConfig.Container = this.el.nativeElement.id; // set container
    this.jsPlumbInstance = jsPlumb.getInstance(plumbConfig);
    // jsPlumbInstance add bind
    this.addBindJsPlumb();

    // MINI-MAP
    this.jsPlumbInstanceMinimap = jsPlumb.getInstance();
    this.jsPlumbInstanceMinimap.setContainer(this.minimapElementRef.nativeElement.id);
    // set size mini-map view
    const rectMap = this.el.nativeElement.getBoundingClientRect();
    this.setSizeMinimapView(rectMap.right - rectMap.left,
      rectMap.bottom - rectMap.top,
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight);
    // set position minimap view
    this.minimapViewElementRef.nativeElement.style.top = 0 + 'px';
    this.minimapViewElementRef.nativeElement.style.left = 0 + 'px';

    // TASK
    this.taskService.subscribeOnTaskSubmitted((data) => {
      if (this.listUbixTask) {
        this.listUbixTask.forEach((task) => {
          if (task.instance.id = data.id) {
            task.instance.setConfig(data);
          }
        });
      }
    });
  }

  // JS PLUMB
  private addBindJsPlumb(): void {
    this.jsPlumbInstance.bind('connection', (info) => {
      this.addConnectToMinimap(info.sourceEndpoint.id, info.targetEndpoint.id);
    });
    this.jsPlumbInstance.bind('connectionDetached', (info) => {
      this.deleteConnectToMinimap(info.sourceEndpoint.id, info.targetEndpoint.id);
    });
    this.jsPlumbInstance.bind('connectionMoved', (info) => {
      this.deleteConnectToMinimap(info.originalSourceEndpoint.id, info.originalTargetEndpoint.id);
    });
    this.jsPlumbInstance.bind('connectionDrag', (info) => {
      if (this.listUbixTask) {
        let component: UbixTaskComponent;
        this.listUbixTask.forEach((task) => {
          task.instance.unselectedTask();
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
        task.unselectedTask();
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
    this.shiftMinimap(event.target.scrollLeft,
      event.target.scrollTop,
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight);
  }

  @HostListener('window:resize')
  windowResize() {
    // resize minimap view
    const rectMap = this.el.nativeElement.getBoundingClientRect();
    this.setSizeMinimapView(rectMap.right - rectMap.left,
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
  private createNewTask(taskTemplate: ITaskTemplate, pos?: any) {
    const newTaskId = 'task-' + new Date().getTime();
    const factories = Array.from(this.resolver['_factories'].keys());
    const factoryClass = <Type<UbixTaskComponent>> factories.find((factory: any) => factory.name === 'UbixTaskComponent');
    const taskComponentFactory = this.resolver.resolveComponentFactory(factoryClass);
    const taskComponentRef = this.viewContainerRef.createComponent(taskComponentFactory, -1, this.viewContainerRef.injector);
    // set input
    taskComponentRef.instance.id = newTaskId;
    taskComponentRef.instance.taskTemplate = taskTemplate;
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

  private deleteTask = (event: UbixTaskComponent) => {
    // delete task in listUbixTask
    if (this.listUbixTask) {
      this.listUbixTask.forEach((task, index) => {
        if (task.instance.id === event.id) {
          delete this.listUbixTask[index];
        }
      });
    }

    // delete task in minimap
    this.deleteTaskMinimap(event.id, event.listInputIdPorts, event.listOutputIdPorts);
  }

  private moveTask = (id: string, positionX: number, positionY: number) => {
    this.setPositionTaskInPercentMinimap(id,
      positionX / (this.el.nativeElement.scrollWidth / 100),
      positionY / (this.el.nativeElement.scrollHeight / 100));
  }

  private createTask = (task: HTMLElement, positionX: number, positionY: number, taskTemplate: ITaskTemplate): void => {
    this.addTaskToMinimap(task, positionX / (this.el.nativeElement.scrollWidth / 100),
      positionY / (this.el.nativeElement.scrollHeight / 100),
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight,
      taskTemplate);
  }

  private selectedTask = (event: UbixTaskComponent): void => {
    if (this.selectUbixTask) {
      if (this.selectUbixTask[this.selectUbixTask.length - 1].id === event.id) {
        return;
      }
      // property editor
      this.taskService.fireTaskChanged(event.getConfig());
      // unselected task
      this.selectUbixTask.forEach((task) => {
        task.unselectedTask();
      });
      // selected task
      event.selectedTask();
    } else {
      // property editor
      this.taskService.fireTaskChanged(event.getConfig());
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

  // MINI-MAP
  ///////////
  private setSizeMinimapView(sizeFlowEditorWindowWidth: number,
                            sizeFlowEditorWindowHeight: number,
                            sizeFlowEditorScrollWidth: number,
                            sizeFlowEditorScrollHeight: number): void {
    // get percent
    const sizePercentWidthMiniMapView = sizeFlowEditorWindowWidth / (sizeFlowEditorScrollWidth / 100);
    const sizePercentHeightMiniMapView = sizeFlowEditorWindowHeight / (sizeFlowEditorScrollHeight / 100);
    // set size
    const rectMiniMap = this.getMinimapBoundingClientRect();
    this.minimapViewElementRef.nativeElement.style.width =
      ((rectMiniMap.right - rectMiniMap.left) / 100 * sizePercentWidthMiniMapView) + 'px';
    this.minimapViewElementRef.nativeElement.style.height =
      ((rectMiniMap.bottom - rectMiniMap.top) / 100 * sizePercentHeightMiniMapView) + 'px';
  }

  private shiftMinimap(x: number, y: number, sizeFlowEditorScrollWidth: number, sizeFlowEditorScrollHeight: number): void {
    // set position mini-map
    this.minimapElementRef.nativeElement.style.right = (this.positionMiniMap.x - x) + 'px';
    this.minimapElementRef.nativeElement.style.top = (this.positionMiniMap.y + y) + 'px';
    // set position mini-map view
    // get percent position
    const positionPercentX = x / (sizeFlowEditorScrollWidth / 100);
    const positionPercentY = y / (sizeFlowEditorScrollHeight / 100);
    // set position
    const rectMiniMap = this.getMinimapBoundingClientRect();
    this.minimapViewElementRef.nativeElement.style.left = ((rectMiniMap.right - rectMiniMap.left) / 100 * positionPercentX) + 'px';
    this.minimapViewElementRef.nativeElement.style.top = ((rectMiniMap.bottom - rectMiniMap.top) / 100 * positionPercentY) + 'px';
  }

  // TASK
  private addTaskToMinimap(taskEl: HTMLElement,
                 positionPercentX: number,
                 positionPercentY: number,
                 sizeFlowEditorScrollWidth: number,
                 sizeFlowEditorScrollHeight: number,
                 taskTemplate: ITaskTemplate): void {
    const rectMiniMap = this.getMinimapBoundingClientRect();
    const newTaskEl = document.createElement('div');

    newTaskEl.setAttribute('class', taskEl.getAttribute('class'));
    newTaskEl.id = taskEl.id + this.suffixForIdTaskMinimap;
    newTaskEl.style.borderWidth = '1px';
    newTaskEl.style.width = taskEl.style.width;
    newTaskEl.style.height = taskEl.style.height;
    // append
    this.minimapElementRef.nativeElement.appendChild(newTaskEl);
    // get size
    const rectnewTaskEl = taskEl.getBoundingClientRect();
    const sizeWidth = rectnewTaskEl.right - rectnewTaskEl.left;
    const sizeHeight = rectnewTaskEl.bottom - rectnewTaskEl.top;
    const sizePercentWidth = sizeWidth / (sizeFlowEditorScrollWidth / 100);
    const sizePercentHeight = sizeHeight / (sizeFlowEditorScrollHeight / 100);
    // set size
    newTaskEl.style.width = ((rectMiniMap.right - rectMiniMap.left) / 100 * sizePercentWidth) + 'px';
    newTaskEl.style.height = ((rectMiniMap.bottom - rectMiniMap.top) / 100 * sizePercentHeight) + 'px';
    newTaskEl.style.minHeight = 0 + 'px';
    newTaskEl.style.minWidth = 0 + 'px';
    // set position
    newTaskEl.style.left = ((rectMiniMap.right - rectMiniMap.left) / 100 * positionPercentX) + 'px';
    newTaskEl.style.top = ((rectMiniMap.bottom - rectMiniMap.top) / 100 * positionPercentY) + 'px';
    // add endpoint
    const portOptions = {
      anchor: [],
      maxConnections: 1,
      parameters: {},
      id: '',
      scope: '1.0',
      cssClass: 'minimap-endpoint',
      reattachConnections: true,
      type: 'Dot',
      paintStyle: {radius: 1, fill: 'black'},
      isSource: false,
      isTarget: false,
      connector: 'Straight',
    };
    const countInput = taskTemplate.consumes.length || 0;
    const countOutput = taskTemplate.produces.length || 0;
    AddEndpointInputPorts(newTaskEl.id, portOptions, countInput, this.jsPlumbInstanceMinimap, taskEl.id, '');
    AddEndpointOutputPorts(newTaskEl.id, portOptions, countOutput, this.jsPlumbInstanceMinimap, taskEl.id, '');
  }

  // move task
  private setPositionTaskInPercentMinimap(taskId: string, positionPercentX: number, positionPercentY: number): void {
    const minimapTaskId = taskId + this.suffixForIdTaskMinimap;
    const rectMiniMap = this.getMinimapBoundingClientRect();

    document.getElementById(minimapTaskId).style.left = ((rectMiniMap.right - rectMiniMap.left) / 100 * positionPercentX) + 'px';
    document.getElementById(minimapTaskId).style.top = ((rectMiniMap.bottom - rectMiniMap.top) / 100 * positionPercentY) + 'px';
    this.jsPlumbInstanceMinimap.repaintEverything();
  }

  // delete task
  private deleteTaskMinimap(taskId: string, inputIdPorts: string[], outputIdPorts: string[]) {
    // delete jsPlumb connections and endpoints in minimap
    if (inputIdPorts) {
      inputIdPorts.forEach((portId) => {
        const endpoint =  this.jsPlumbInstanceMinimap.getEndpoint(portId);
        this.jsPlumbInstanceMinimap.deleteConnection(endpoint.connectorSelector());
        this.jsPlumbInstanceMinimap.deleteEndpoint(endpoint);
      });
    }
    if (outputIdPorts) {
      outputIdPorts.forEach((portId) => {
        const endpoint =  this.jsPlumbInstanceMinimap.getEndpoint(portId);
        this.jsPlumbInstanceMinimap.deleteConnection(endpoint.connectorSelector());
        this.jsPlumbInstanceMinimap.deleteEndpoint(endpoint);
      });
    }

    // delete task in minimap
    document.getElementById(taskId + this.suffixForIdTaskMinimap).remove();
  }

  // CONNECT CONTROL
  private addConnectToMinimap(sourceEndpointId: string, targetEndpointId: string): void {
    this.jsPlumbInstanceMinimap.connect({
      uuids: [sourceEndpointId, targetEndpointId]
    });
  }

  private deleteConnectToMinimap(sourceEndpointId: string, targetEndpointId: string): void {
    const sourceEndpoint = this.jsPlumbInstanceMinimap.getEndpoint(sourceEndpointId);
    const targetEndpoint = this.jsPlumbInstanceMinimap.getEndpoint(targetEndpointId);

    this.jsPlumbInstanceMinimap.deleteConnection(sourceEndpoint.connectorSelector());
    this.jsPlumbInstanceMinimap.deleteConnection(targetEndpoint.connectorSelector());
  }
}
