import { Directive, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import { Endpoint, jsPlumb, jsPlumbInstance } from 'jsplumb';

import { Store } from '../models/store.model';
import { Minimap } from '../models/minimap.model';
import {AddEndpointInputPorts, AddEndpointOutputPorts, GetCenterElement, ParseStylePxToNumber} from '../services/tools.service';
import { Swimlane } from '../models/swimlane.model';
import {DataSourceService} from '../services/data-source.service';

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
  private nameSwimlane = 'swimlane';
  private mapSwimLane: {[key: string]: Swimlane} = {};
  private listSwimLaneName: string[] = [];
  private useSwimLane = true;

  constructor(private el: ElementRef,
              private dataSource: DataSourceService
  ) { }

  ngOnInit(): void {
    // jsPlumb init
    this.jsPlumbInstance = jsPlumb.getInstance();
    this.jsPlumbInstance.setContainer(this.el.nativeElement.id);
    // mini-map scrolling to flow-editor-map
    this.miniMap.setEventListenerMiniMapView((percentPosition: {percentX: number, percentY: number}) => {
      this.setPositionScroll(percentPosition.percentX, percentPosition.percentY);
    });
    // set size mini-map view
    this.resizeMiniMapView();
    // jsPlumbInstance add bind
    this.addBindJsPlumb();
    // swimlane
    this.dataSource.categories.forEach((categorie) => {
      const red = Math.random() * 255;
      const green = Math.random() * 255;
      const blue = Math.random() * 255;
      this.createSwimLanes({name: categorie,
        color: 'rgba(' + red + ', ' + green + ', ' + blue + ', 0.05',
        borderColor: 'rgba(' + red + ', ' + green + ', ' + blue + ', 0.2',
        height: 200});
    });
    // this.createSwimLanes( {name: 'collection', color: 'rgba(255, 77, 74, 0.05)', borderColor: 'rgba(255, 77, 74, 0.2)', height: 200},
    //   {name: 'transform', color: 'rgba(87, 255, 84, 0.05)', borderColor: 'rgba(87, 255, 84, 0.2)', height: 200},
    //   {name: 'driver clustering', color: 'rgba(102, 96, 255, 0.05)', borderColor: 'rgba(102, 96, 255, 0.2)', height: 200});
    // TODO: test
    // this.swimLanesOff();
    // setTimeout(() => {
    //   this.swimLanesOff();
    // }, 5000);
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

  // SWIMLANE
  private createSwimLanes(...params: {name: string, color: string, borderColor: string, height: number}[]) {
    params.forEach((param) => {
      const newSwimLane = document.createElement('div');
      newSwimLane.id = this.nameSwimlane + '-' + param.name;
      newSwimLane.classList.add('swimlane');
      newSwimLane.setAttribute('name', this.nameSwimlane);
      newSwimLane.style.width = this.el.nativeElement.scrollWidth + 'px';
      newSwimLane.style.backgroundColor = param.color;
      newSwimLane.style.borderColor = param.borderColor;
      newSwimLane.style.height = param.height + 'px';
      this.el.nativeElement.appendChild(newSwimLane);
      this.mapSwimLane[param.name] = new Swimlane(newSwimLane.id,
        param.name,
        this.onMoveTask,
        this.onCreateTask,
        this.jsPlumbInstance,
        this.store,
        this.nameTask,
        this.el.nativeElement.id);
      this.listSwimLaneName.push(param.name);
    });
  }

  public swimLanesOff() {
    this.useSwimLane = false;
    this.listSwimLaneName.forEach((nameSwimlane) => {
      this.mapSwimLane[nameSwimlane].visibleOff();
      const divAll = this.el.nativeElement.getElementsByTagName('div');
      for (let i = 0; i < divAll.length; i++) {
        const div = divAll.item(i);
        if (div.getAttribute('name') !== this.nameTask) { continue; }

        const config = JSON.parse(div.getAttribute('config'));
        const position = {x: ParseStylePxToNumber(div.style.left),
          y: ParseStylePxToNumber(div.style.top) + this.mapSwimLane[nameSwimlane].getTopPosition()};
        this.mapSwimLane[nameSwimlane].deleteChild(div);
        this.createNewTask(config, position, div.id);
      }
    });
  }

  public swimLanesOn() {
    this.useSwimLane = true;
    this.listSwimLaneName.forEach((nameSwimlane) => {
      this.mapSwimLane[nameSwimlane].visibleOn();
    });
  }

  // DRAG AND DROP
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    if (!this.store || this.store.type !== 'new_ubix_task' || this.useSwimLane) { return; }

    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    if (!this.store || this.store.type !== 'new_ubix_task' || this.useSwimLane) { return; }

    const position = this.getPositionMouse(event);

    event.preventDefault();
    this.createNewTask(this.store.data, {x: position.x, y: position.y, type: 'mouse'});
    this.store.setStore({type: '', data: null, event: null});
  }

  // SCROLLING
  @HostListener('scroll', ['$event'])
  onScroll(event) {
    this.miniMap.shift(event.target.scrollLeft,
      event.target.scrollTop,
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight);
  }

  @HostListener('mousedown', ['$event'])
  onMouseDownMoveScroll(event) {
    if (event.target.getAttribute('name') === this.nameTask || event.target.id === this.miniMap.getMiniMapViewName()) { return; }

    document.body.style.cursor = 'move';
    let startPositionMouse = {x: event.clientX, y: event.clientY};

    const moveMouseScroll = (e): void => {
      const startPositionX = this.el.nativeElement.scrollLeft;
      const startPositionY = this.el.nativeElement.scrollTop;
      const newPositionMouse = {x: e.clientX, y: e.clientY};
      let newPositionX = startPositionX;
      let newPositionY = startPositionY;
      // set new X position
      if (newPositionMouse.x > startPositionMouse.x) {
        newPositionX = startPositionX - (newPositionMouse.x - startPositionMouse.x);
      }
      if (newPositionMouse.x < startPositionMouse.x) {
        newPositionX = startPositionX + (startPositionMouse.x - newPositionMouse.x);
      }
      // set new Y position
      if (newPositionMouse.y > startPositionMouse.y) {
        newPositionY = startPositionY - (newPositionMouse.y - startPositionMouse.y);
      }
      if (newPositionMouse.y < startPositionMouse.y) {
        newPositionY = startPositionY + (startPositionMouse.y - newPositionMouse.y);
      }
      // set position scroll
      startPositionMouse = newPositionMouse;
      this.el.nativeElement.scrollLeft = newPositionX;
      this.el.nativeElement.scrollTop = newPositionY;
    };

    // add
    window.addEventListener('mousemove', moveMouseScroll);
    // mouse up
    window.addEventListener('mouseup', () => {
      document.body.style.cursor = 'default';
      window.removeEventListener('mousemove', moveMouseScroll);
    });
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
  private onMoveTask = (positionX: number, positionY: number, taskId: string, swimlaneName: string): void => {
    this.miniMap.setPositionTaskInPercent(taskId,
      positionX / (this.el.nativeElement.scrollWidth / 100),
      (positionY + this.mapSwimLane[swimlaneName].getTopPosition()) / (this.el.nativeElement.scrollHeight / 100));
  }

  private onCreateTask = (newTask: HTMLElement, positionX: number, positionY: number, config: any, swimlaneName: string): void => {
    this.miniMap.addTask(newTask, positionX / (this.el.nativeElement.scrollWidth / 100),
      (positionY + this.mapSwimLane[swimlaneName].getTopPosition()) / (this.el.nativeElement.scrollHeight / 100),
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight,
      config);
  }

  // CREATE TASK
  // createNewTask and return id element new task
  private createNewTask(config: any, pos?: any, id?: string): string {
    // create task body
    const newTaskId = 'task-' + new Date().getTime();
    const newTask = document.createElement('div');
    newTask.classList.add('flow-editor-task');
    newTask.id = id ? id : newTaskId;
    newTask.innerText = config ? config.title ? config.title : '' : '';
    newTask.setAttribute('onselectstart', 'return false');
    newTask.setAttribute('onmousedown', 'return false');
    newTask.setAttribute('name', this.nameTask);
    this.el.nativeElement.appendChild(newTask);
    // set position
    if (pos && pos.x && pos.y) {
      if (pos.type === 'mouse') {
        const centerEl = GetCenterElement(newTask);
        pos.x -= centerEl.x;
        pos.y -= centerEl.y;
      }
    } else {
      pos.x = 10;
      pos.y = 10;
    }
    newTask.style.left = pos.x + 'px';
    newTask.style.top = pos.y + 'px';
    // create task ports
    const portOptions = {
      anchor: [],
      maxConnections: 1,
      parameters: {},
      id: '',
      scope: '1.0',
      reattachConnections: true,
      type: 'Dot',
      cssClass: 'endpoint',
      isSource: true,
      isTarget: true,
      connector: 'Bezier',
    };
    const countInput = config ? config.inputPorts ? config.inputPorts.length : 0 : 0;
    const countOutput = config ? config.outputPorts ? config.outputPorts.length : 0 : 0;
    AddEndpointInputPorts(newTaskId, portOptions, countInput, this.jsPlumbInstance, newTaskId, '');
    AddEndpointOutputPorts(newTaskId, portOptions, countOutput, this.jsPlumbInstance, newTaskId, '');

    this.jsPlumbInstance.repaintEverything();

    this.addMoveTask(newTask);

    // add task to mini-map
    this.miniMap.addTask(newTask, pos.x / (this.el.nativeElement.scrollWidth / 100),
      pos.y / (this.el.nativeElement.scrollHeight / 100),
      this.el.nativeElement.scrollWidth,
      this.el.nativeElement.scrollHeight,
      config);

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
