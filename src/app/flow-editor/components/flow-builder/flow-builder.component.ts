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

  /**
   * Connect UbixTaskViewDirective to FlowBuilderComponent.
   */
  @Input() store: Store;

  /**
   * Child.
   */
  @ViewChild('flowBuilderArea')
  private flowBuilderAreaElementRef: ElementRef;

  @ViewChild('spawnTask', { read: ViewContainerRef })
  public spawnTaskViewContainerRef: ViewContainerRef;

  @ViewChild('minimap')
  private minimapElementRef: ElementRef;

  @ViewChild('minimapArea')
  private minimapAreaElementRef: ElementRef;

  @ViewChild('minimapView')
  private minimapViewElementRef: ElementRef;

  /**
   * Flow builder.
   */
  private jsPlumbInstance: jsPlumbInstance;
  private listUbixTask: ComponentRef<UbixTaskComponent>[] = [];
  private selectUbixTask: UbixTaskComponent[];
  /**
   * Minimap.
   */
  private jsPlumbInstanceMinimap: jsPlumbInstance;
  private suffixForIdTaskMinimap = '_mini-map-task';
  private positionMiniMap: {x: number, y: number} = {x: 20, y: 20};
  public getMinimapBoundingClientRect = (): ClientRect | DOMRect => {
    return this.minimapAreaElementRef.nativeElement.getBoundingClientRect();
  }
  public moveMinimapView = (percentPosition: { percentX: number, percentY: number }): void => {
    this.setPositionScroll(percentPosition.percentX, percentPosition.percentY, true);
  }
  /**
   * Zoom-control.
   */
  public percentZoom = 100;
  private getPercentZoom = (): number => {
    return this.percentZoom;
  }
  /**
   * Move view.
   */
  private pressed = false;
  private startPositionMouse: { x: number, y: number };

  constructor(private resolver: ComponentFactoryResolver,
              private flowBuilderElementRef: ElementRef,
              private dataSource: DataSourceService,
              private taskService: TaskService,
  ) {
  }

  ngOnInit(): void {
    /**
     * set defaults settings.
     */
    this.flowBuilderElementRef.nativeElement.id = 'flow-builder';
    this.flowBuilderElementRef.nativeElement.setAttribute('class', 'flow-builder');

    /**
     * JS-PLUMB.
     */
    // set defaults taskTemplate jsPlumb
    const plumbConfig = jsPlumbConfig;
    plumbConfig.Container = this.flowBuilderAreaElementRef.nativeElement.id; // set container
    this.jsPlumbInstance = jsPlumb.getInstance(plumbConfig);
    // jsPlumbInstance add bind
    this.addBindJsPlumb();

    /**
     * MINI-MAP.
     */
    // js - plumb
    this.jsPlumbInstanceMinimap = jsPlumb.getInstance();
    this.jsPlumbInstanceMinimap.setContainer(this.minimapAreaElementRef.nativeElement.id);
    // set size mini-map view
    const rectMap = this.flowBuilderElementRef.nativeElement.getBoundingClientRect();
    this.setSizeMinimapView(rectMap.right - rectMap.left,
      rectMap.bottom - rectMap.top,
      this.flowBuilderElementRef.nativeElement.scrollWidth,
      this.flowBuilderElementRef.nativeElement.scrollHeight);
    // set position minimap view
    this.minimapViewElementRef.nativeElement.style.top = 0 + 'px';
    this.minimapViewElementRef.nativeElement.style.left = 0 + 'px';

    /**
     * TASK.
     */
    // listener form renderer
    this.taskService.subscribeOnTaskSubmitted((data) => {
      if (this.listUbixTask) {
        this.listUbixTask.forEach((task) => {
          if (task.instance.id = data.id) { // your task
            task.instance.setConfig(data);
          }
        });
      }
    });
  }

  /* -------------------------------------------- JS PLUMB ---------------------------------------------------- */

  private addBindJsPlumb(): void {
    /**
     * Connection.
     */
    this.jsPlumbInstance.bind('connection', (info) => {
      if (info.targetId === info.sourceId) {
        return;
      }
      this.addConnectToMinimap(info.sourceEndpoint.id, info.targetEndpoint.id);
    });
    /**
     * Connection detached.
     */
    this.jsPlumbInstance.bind('connectionDetached', (info) => {
      this.deleteConnectToMinimap(info.sourceEndpoint.id, info.targetEndpoint.id);
    });
    /**
     * Connection moved.
     */
    this.jsPlumbInstance.bind('connectionMoved', (info) => {
      this.deleteConnectToMinimap(info.originalSourceEndpoint.id, info.originalTargetEndpoint.id);
    });
    /**
     * Connection drag.
     */
    this.jsPlumbInstance.bind('connectionDrag', (info) => {
      if (this.listUbixTask) {
        let component: UbixTaskComponent; // for update selectUbixTask[]
        this.listUbixTask.forEach((task) => {
          task.instance.unselectedTask();
          // setPaintStyle all
          if (task.instance.listInputIdPorts) {
            task.instance.listInputIdPorts.forEach((portId) => {
              const endpoint = this.jsPlumbInstance.getEndpoint(portId);
              endpoint.setPaintStyle({stroke: '#00d305', fill: '#00d305'});
            });
          }
          if (task.instance.listOutputIdPorts) {
            task.instance.listOutputIdPorts.forEach((portId) => {
              const endpoint = this.jsPlumbInstance.getEndpoint(portId);
              endpoint.setPaintStyle({stroke: '#d3000b', fill: '#d3000b'});
            });
          }
          // drag endpoint
          if (task.instance.id === info.sourceId) {
            // setPaintStyle bloc
            if (task.instance.listInputIdPorts) {
              task.instance.listInputIdPorts.forEach((portId) => {
                const endpoint = this.jsPlumbInstance.getEndpoint(portId);
                endpoint.setPaintStyle({stroke: '#d3000b', fill: '#d3000b'});
              });
            }
            // setPaintStyle default
            if (task.instance.listOutputIdPorts) {
              task.instance.listOutputIdPorts.forEach((portId) => {
                const endpoint = this.jsPlumbInstance.getEndpoint(portId);
                endpoint.setPaintStyle({fill: 'rgba(95, 158, 160, 0.4)', stroke: 'rgba(95, 158, 160, 0.6)', strokeWidth: 3, radius: 5});
              });
            }
            // selected your task
            component = task.instance; // for update selectUbixTask[]
            task.instance.selectedTask();
            // to form builder
            this.taskService.fireTaskChanged(task.instance.getConfig());
          }
        });
        if (component) {
          const list = [];
          list.push(component);
          this.selectUbixTask = list;
        }
      }
    });
    /**
     * Connection drag stop.
     */
    this.jsPlumbInstance.bind('connectionDragStop', (info) => {
      if (this.listUbixTask) {
        this.listUbixTask.forEach((task) => {
          // setPaintStyle default
          if (task.instance.listInputIdPorts) {
            task.instance.listInputIdPorts.forEach((portId) => {
              const endpoint = this.jsPlumbInstance.getEndpoint(portId);
              endpoint.setPaintStyle({fill: 'rgba(95, 158, 160, 0.4)', stroke: 'rgba(95, 158, 160, 0.6)', strokeWidth: 3, radius: 5});
            });
          }
          if (task.instance.listOutputIdPorts) {
            task.instance.listOutputIdPorts.forEach((portId) => {
              const endpoint = this.jsPlumbInstance.getEndpoint(portId);
              endpoint.setPaintStyle({fill: 'rgba(95, 158, 160, 0.4)', stroke: 'rgba(95, 158, 160, 0.6)', strokeWidth: 3, radius: 5});
            });
          }
        });
      }
      // TODO: error: source === target { connect work }!
    });
  }

  /* -------------------------------------------- HOST LISTENERS ---------------------------------------------------- */

  // DROP-ZONE:
  ////////////
  @HostListener('dragover', ['$event'])
  dragOver(event) {
    if (!this.store ||
      this.store.type !== 'new_ubix_task' ||
      event.target !== this.flowBuilderAreaElementRef.nativeElement) {
      return;
    }

    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  drop(event) {
    if (!this.store ||
      this.store.type !== 'new_ubix_task' ||
      event.target !== this.flowBuilderAreaElementRef.nativeElement) {
      return;
    }
    const position = this.getMousePosition(event);
    event.preventDefault();
    this.createNewTask(this.store.data, {x: position.x, y: position.y, type: 'mouse'});
  }

  // WINDOW FLOW BUILDER:
  //////////////////////
  @HostListener('scroll', ['$event'])
  scroll(event) {
    this.shiftMinimap(event.target.scrollLeft,
      event.target.scrollTop,
      this.flowBuilderElementRef.nativeElement.scrollWidth,
      this.flowBuilderElementRef.nativeElement.scrollHeight);
  }

  @HostListener('window:resize')
  windowResize() {
    // resize minimap view
    const rectMap = this.flowBuilderElementRef.nativeElement.getBoundingClientRect();
    this.setSizeMinimapView(rectMap.right - rectMap.left,
      rectMap.bottom - rectMap.top,
      this.parseStyleInt(this.flowBuilderAreaElementRef.nativeElement.style.width) * (this.percentZoom / 100),
      this.parseStyleInt(this.flowBuilderAreaElementRef.nativeElement.style.height) * (this.percentZoom / 100));
  }

  private setPositionScroll(x: number, y: number, inPercent?: boolean): void {
    if (inPercent) {
      this.flowBuilderElementRef.nativeElement.scrollLeft = (this.flowBuilderElementRef.nativeElement.scrollWidth / 100) * x;
      this.flowBuilderElementRef.nativeElement.scrollTop = (this.flowBuilderElementRef.nativeElement.scrollHeight / 100) * y;
    } else {
      this.flowBuilderElementRef.nativeElement.scrollLeft = x;
      this.flowBuilderElementRef.nativeElement.scrollTop = y;
    }
  }

  // CLICK:
  ////////
  @HostListener('mousedown', ['$event'])
  mouseDown(event) {
    // move view
    this.mouseDownMoveView(event);

    // unselected tasks
    if (event.target === this.flowBuilderAreaElementRef.nativeElement) {
      if (this.selectUbixTask) {
        this.selectUbixTask.forEach((task) => {
          task.unselectedTask();
        });
        this.selectUbixTask = null;
      }
    }
  }

  /* -------------------------------------------- MOVE VIEW ---------------------------------------------------- */

  private moveView(e) {
    const startPositionX = this.flowBuilderElementRef.nativeElement.scrollLeft;
    const startPositionY = this.flowBuilderElementRef.nativeElement.scrollTop;
    const newPositionMouse = {x: e.clientX / (this.percentZoom / 100), y: e.clientY / (this.percentZoom / 100)};
    let newPositionX: number;
    let newPositionY: number;
    // set new X position
    newPositionX = startPositionX - (newPositionMouse.x - this.startPositionMouse.x);
    // set new Y position
    newPositionY = startPositionY - (newPositionMouse.y - this.startPositionMouse.y);
    // set position scroll
    this.startPositionMouse = newPositionMouse;
    this.flowBuilderElementRef.nativeElement.scrollLeft = newPositionX;
    this.flowBuilderElementRef.nativeElement.scrollTop = newPositionY;
  }

  // listener mousedown
  private mouseDownMoveView(event) {
    if (event.target === this.flowBuilderAreaElementRef.nativeElement) {
      document.body.style.cursor = 'move';
      this.startPositionMouse = {x: event.clientX / (this.percentZoom / 100), y: event.clientY / (this.percentZoom / 100)};
      this.pressed = true;
    }
  }

  @HostListener('mousemove', ['$event'])
  mouseMoveMoveView(event) {
    if (this.pressed) {
      this.moveView(event);
    }
  }

  @HostListener('mouseup')
  mouseUpMoveView() {
    this.pressed = false;
    document.body.style.cursor = 'default';
  }

  /* ---------------------------------------------- TASK ------------------------------------------------------ */

  // createNewTask and append to listUbixTask[] new task
  private createNewTask(taskTemplate: ITaskTemplate, pos?: any) {
    const newTaskId = 'task-' + new Date().getTime();
    const factories = Array.from(this.resolver['_factories'].keys());
    const factoryClass = <Type<UbixTaskComponent>> factories.find((factory: any) => factory.name === 'UbixTaskComponent');
    const taskComponentFactory = this.resolver.resolveComponentFactory(factoryClass);
    const taskComponentRef = this.spawnTaskViewContainerRef.createComponent(taskComponentFactory, -1,
      this.spawnTaskViewContainerRef.injector);
    // set input
    taskComponentRef.instance.id = newTaskId;
    taskComponentRef.instance.taskTemplate = taskTemplate;
    taskComponentRef.instance.position = pos;
    taskComponentRef.instance.jsPlumbInstance = this.jsPlumbInstance;
    taskComponentRef.instance.onDeleteTask = this.deleteTask;
    taskComponentRef.instance.onMoveTask = this.moveTask;
    taskComponentRef.instance.onCreateTask = this.createTask;
    taskComponentRef.instance.onSelectedTask = this.selectedTask;
    taskComponentRef.instance.getPercentZoom = this.getPercentZoom;
    taskComponentRef.instance.el = taskComponentRef.location;
    taskComponentRef.instance.elViewRef = taskComponentRef.hostView;
    taskComponentRef.instance.init();
    this.listUbixTask.push(taskComponentRef);
  }

  // CALLBACK FUNCTION:
  ////////////////////
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
      positionX / (this.parseStyleInt(this.flowBuilderAreaElementRef.nativeElement.style.width) / 100),
      positionY / (this.parseStyleInt(this.flowBuilderAreaElementRef.nativeElement.style.height) / 100));
  }

  private createTask = (task: HTMLElement, positionX: number, positionY: number, taskTemplate: ITaskTemplate): void => {
    this.addTaskToMinimap(task, positionX / (this.parseStyleInt(this.flowBuilderAreaElementRef.nativeElement.style.width) / 100),
      positionY / (this.parseStyleInt(this.flowBuilderAreaElementRef.nativeElement.style.height) / 100),
      this.parseStyleInt(this.flowBuilderAreaElementRef.nativeElement.style.width),
      this.parseStyleInt(this.flowBuilderAreaElementRef.nativeElement.style.height),
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

  /* ---------------------------------------------- TOOLS ------------------------------------------------------ */

  private getMousePosition = (event): { x: number, y: number } => {
    const posMouseX = event.offsetX === undefined ? event.layerX : event.offsetX;
    const posMouseY = event.offsetY === undefined ? event.layerY : event.offsetY;
    return {x: posMouseX / (this.percentZoom / 100), y: posMouseY / (this.percentZoom / 100)};
  }

  // Input: '20px', return: 20
  private parseStyleInt(str: string): number {
    return parseInt(str.slice(0, str.length - 2), null);
  }

  /* ---------------------------------------------- MINI-MAP ------------------------------------------------------ */

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

  // MINI-MAP TASK:
  ////////////////
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
    this.minimapAreaElementRef.nativeElement.appendChild(newTaskEl);
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
    const countInput = taskTemplate.consumes ? taskTemplate.consumes.length : 0;
    const countOutput = taskTemplate.produces ? taskTemplate.produces.length : 0;
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

  // CONNECT CONTROL:
  //////////////////
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

  /* ---------------------------------------------- ZOOM-CONTROL ------------------------------------------------------ */

  // input: percent
  changeZoom(change: number) {
    if (this.percentZoom + change < 40 || this.percentZoom + change > 140) {
      return; // changeZoom > 100 or < 50
    }

    const rectMap = this.flowBuilderElementRef.nativeElement.getBoundingClientRect();
    const widthArea = this.parseStyleInt(this.flowBuilderAreaElementRef.nativeElement.style.width);
    const heightArea = this.parseStyleInt(this.flowBuilderAreaElementRef.nativeElement.style.height);

    const newZoom = (this.percentZoom + change) / 100;
    if (newZoom * widthArea < (rectMap.right - rectMap.left) ||
      newZoom * heightArea < (rectMap.bottom - rectMap.top)) {
      return;
    }

    // set new zoom
    this.percentZoom += change;
    this.jsPlumbInstance.setZoom(this.percentZoom / 100, false);
    this.flowBuilderAreaElementRef.nativeElement.style.zoom = this.percentZoom + '%';
    this.jsPlumbInstance.repaintEverything();
    this.windowResize();
  }
}
