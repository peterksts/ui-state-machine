import { Directive, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import {Endpoint, jsPlumb, jsPlumbInstance} from 'jsplumb';

import { Store } from '../models/store.model';
import { Minimap } from '../models/minimap.model';
import { AddEndpointInputPorts, AddEndpointOutputPorts, GetCenterElement } from '../services/tools.service';

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

  constructor(private el: ElementRef
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

  private startPositionMouse: {x: number, y: number} = {x: 0, y: 0};
  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    if (event.target.id !== this.el.nativeElement.id) { return; }
    document.body.style.cursor = 'move';
    this.startPositionMouse = {x: event.clientX, y: event.clientY};

    window.addEventListener('mousemove', this.moveMouseScroll);
    // up
    window.addEventListener('mouseup', () => {
      document.body.style.cursor = 'default';
      window.removeEventListener('mousemove', this.moveMouseScroll);
    });
  }

  private moveMouseScroll = (e): void => {
    const startPositionX = this.el.nativeElement.scrollLeft;
    const startPositionY = this.el.nativeElement.scrollTop;
    const newPositionMouse = {x: e.clientX, y: e.clientY};
    let newPositionX = startPositionX;
    let newPositionY = startPositionY;
    // set new X position
    if (newPositionMouse.x > this.startPositionMouse.x) {
      newPositionX = startPositionX - (newPositionMouse.x - this.startPositionMouse.x);
    }
    if (newPositionMouse.x < this.startPositionMouse.x) {
      newPositionX = startPositionX + (this.startPositionMouse.x - newPositionMouse.x);
    }
    // set new Y position
    if (newPositionMouse.y > this.startPositionMouse.y) {
      newPositionY = startPositionY - (newPositionMouse.y - this.startPositionMouse.y);
    }
    if (newPositionMouse.y < this.startPositionMouse.y) {
      newPositionY = startPositionY + (this.startPositionMouse.y - newPositionMouse.y);
    }
    // set position scroll
    this.startPositionMouse = newPositionMouse;
    this.el.nativeElement.scrollLeft = newPositionX;
    this.el.nativeElement.scrollTop = newPositionY;
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

  // set position scroll in percent
  private setPositionScroll(percentX: number, percentY: number) {
    this.el.nativeElement.scrollLeft = (this.el.nativeElement.scrollWidth / 100) * percentX;
    this.el.nativeElement.scrollTop = (this.el.nativeElement.scrollHeight / 100) * percentY;
  }

  // CREATE TASK
  // createNewTask and return id element new task
  private createNewTask(config: any, pos?: any): string {
    // create task body
    const newTaskId = 'task-' + new Date().getTime();
    const newTask = document.createElement('div');
    newTask.classList.add('flow-editor-task');
    newTask.id = newTaskId;
    newTask.innerText = config ? config.title ? config.title : '' : '';
    newTask.setAttribute('onselectstart', 'return false');
    newTask.setAttribute('onmousedown', 'return false');
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
