import { Component, Input, HostListener, ElementRef, OnDestroy, ViewRef, AfterViewInit } from '@angular/core';

import { jsPlumbInstance } from 'jsplumb';

import { AddEndpointInputPorts, AddEndpointOutputPorts, GetCenterElement } from '../../services/tools.service';
import { Task } from '../../models/task.model';
import { PortOptions } from '../../models/port-options.model';

enum statusLoad {
  Off,
  On,
  Ok,
  Bad
}

@Component({
  selector: 'app-ubix-task',
  templateUrl: './ubix-task.component.html',
  styleUrls: ['./ubix-task.component.css']
})
export class UbixTaskComponent implements AfterViewInit, OnDestroy {

  @Input() id: string;
  @Input() el: ElementRef;
  @Input() elViewRef: ViewRef;
  @Input() config: Task;
  @Input() position: { x: number, y: number, type: string };
  @Input() jsPlumbInstance: jsPlumbInstance;
  @Input() onDeleteTask: (id: string) => void;
  @Input() onMoveTask: (id: string, positionX: number, positionY: number) => void;
  @Input() onCreateTask: (task: HTMLElement, positionX: number, positionY: number, config: Task) => void;

  private mouseStartPositionX: number;
  private mouseStartPositionY: number;
  private pressed = false;
  private listInputIdPorts: string[] = [];
  private listOutputIdPorts: string[] = [];
  public title: string;

  constructor() { }

  ngAfterViewInit(): void {
    this.jsPlumbInstance.repaintEverything();
  }

  ngOnDestroy(): void {
    // callback
    this.onDeleteTask(this.id);
    // delete jsPlumb connections and endpoints
    this.listInputIdPorts.forEach((portId) => {
      const endpoint =  this.jsPlumbInstance.getEndpoint(portId);
      this.jsPlumbInstance.deleteConnection(endpoint.connectorSelector());
      this.jsPlumbInstance.deleteEndpoint(endpoint);
    });
    this.listOutputIdPorts.forEach((portId) => {
      const endpoint =  this.jsPlumbInstance.getEndpoint(portId);
      this.jsPlumbInstance.deleteConnection(endpoint.connectorSelector());
      this.jsPlumbInstance.deleteEndpoint(endpoint);
    });
  }

  public destroy() {
    this.elViewRef.destroy();
  }

  public init() {
    // set settings
    this.el.nativeElement.id = this.id;
    this.el.nativeElement.setAttribute('class', 'flow-editor-task');
    this.title = this.config.name || 'task';

    // set position
    if (this.position && this.position.x && this.position.y) {
      if (this.position.type === 'mouse') {
        const centerEl = GetCenterElement(this.el.nativeElement);
        this.position.x -= centerEl.x;
        this.position.y -= centerEl.y;
      }
    } else {
      this.position.x = 10;
      this.position.y = 10;
    }
    this.el.nativeElement.style.left = this.position.x + 'px';
    this.el.nativeElement.style.top = this.position.y + 'px';
    // add endpoint
    const countInput = this.config.consumes.length || 0;
    const countOutput = this.config.produces.length || 0;
    const inputPorts = AddEndpointInputPorts(this.id, PortOptions, countInput, this.jsPlumbInstance, this.id, '');
    const outputPorts = AddEndpointOutputPorts(this.id, PortOptions, countOutput, this.jsPlumbInstance, this.id, '');
    // set list
    if (inputPorts) {
      inputPorts.forEach((port) => {
        this.listInputIdPorts.push(port.id);
      });
    }
    if (outputPorts) {
      outputPorts.forEach((port) => {
        this.listOutputIdPorts.push(port.id);
      });
    }
    // callback
    if (this.onCreateTask) {
      this.onCreateTask(this.el.nativeElement, this.position.x, this.position.y, this.config);
    }
    // add bind to jsPlumb
    this.addBindJsPlumb();
  }

  // JS PLUMB
  private addBindJsPlumb(): void {
    // add connection and set label connection
    this.jsPlumbInstance.bind('connection', (info) => {
      // Output
      if (info.sourceId === this.id) {
        // TODO: set label = dsl table name
        info.connection.setLabel('name_out_' + this.config.name + '_table');
        // set config
        info.connection.setParameter('config', () => {
          return this.config;
        });
      // Input
      } else { if (info.targetId === this.id) {
        // get config
        const inputConfig = info.connection.getParameter<() => Task>('config')();
        // TODO: set src table
      }
      }
    });
    // // delete connection
    // this.jsPlumbInstance.bind('connectionDetached', (info) => {
    //   if (info.sourceId === this.id) {
    //     // TODO: delete output connection
    //   } else { if (info.targetId === this.id) {
    //     // TODO: delete input connection
    //   }
    //   }
    // });
    // // delete connection
    // this.jsPlumbInstance.bind('connectionMoved', (info) => {
    //   if (info.originalSourceId === this.id) {
    //     // TODO: delete output connection
    //   } else { if (info.originalTargetId === this.id) {
    //     // TODO: delete input connection
    //   }
    //   }
    // });
  }

  // PROPERTY EDITOR
  private callbackForEditProperty = (config: Task) => {
    this.config = config;
    // set label connections
    this.listOutputIdPorts.forEach((portId) => {
      const endpoint =  this.jsPlumbInstance.getEndpoint(portId);
      if (endpoint.connectorSelector()) {
        // TODO: set label
        endpoint.connectorSelector().setLabel('test');
      }
    });
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event) {
    this.mouseStartPositionX = event.clientX;
    this.mouseStartPositionY = event.clientY;
    this.pressed = true;
    // TODO: property editor
  }

  @HostListener('body:mousemove', ['$event'])
  mouseMove(event) {
    if (!this.pressed) {
      return;
    }

    const startPositionX = parseInt(this.el.nativeElement.style.left.slice(0, this.el.nativeElement.style.left.length - 2), null);
    const startPositionY = parseInt(this.el.nativeElement.style.top.slice(0, this.el.nativeElement.style.top.length - 2), null);
    let newPositionX = startPositionX;
    let newPositionY = startPositionY;
    // set new X position
    if (event.clientX > this.mouseStartPositionX) {
      newPositionX = startPositionX + (event.clientX - this.mouseStartPositionX);
    }
    if (event.clientX < this.mouseStartPositionX) {
      newPositionX = startPositionX - (this.mouseStartPositionX - event.clientX);
    }
    // set new Y position
    if (event.clientY > this.mouseStartPositionY) {
      newPositionY = startPositionY + (event.clientY - this.mouseStartPositionY);
    }
    if (event.clientY < this.mouseStartPositionY) {
      newPositionY = startPositionY - (this.mouseStartPositionY - event.clientY);
    }
    // set position
    this.mouseStartPositionX = event.clientX;
    this.mouseStartPositionY = event.clientY;
    this.el.nativeElement.style.left = newPositionX + 'px';
    this.el.nativeElement.style.top = newPositionY + 'px';
    this.jsPlumbInstance.repaintEverything();
    // callback
    if (this.onMoveTask) {
      this.onMoveTask(this.id, newPositionX, newPositionY);
    }
  }

  @HostListener('body:mouseup', ['$event'])
  mouseUp(event) {
    this.pressed = false;
  }
}
