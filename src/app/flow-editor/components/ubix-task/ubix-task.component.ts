import { Component, Input, HostListener, ElementRef, OnDestroy, ViewRef, AfterViewInit } from '@angular/core';
import { Task } from '../../models/task.model';
import {Connection, jsPlumbInstance, UUID} from 'jsplumb';
import { AddEndpointInputPorts, AddEndpointOutputPorts, GetCenterElement } from '../../services/tools.service';
import { PortOptions } from '../../models/port-options.model';

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
  private listInputPorts: string[] = [];
  private listOutputPorts: string[] = [];
  private listInputConnections: Connection[] = [];
  private listOutputConnections: Connection[] = [];
  public title: string;

  constructor() { }

  ngAfterViewInit(): void {
    this.jsPlumbInstance.repaintEverything();
  }

  ngOnDestroy(): void {
    // callback
    this.onDeleteTask(this.id);
    // delete jsPlumb connections and endpoint
    this.listInputConnections.forEach((connection) => {
      this.jsPlumbInstance.deleteConnection(connection);
    });
    this.listOutputConnections.forEach((connection) => {
      this.jsPlumbInstance.deleteConnection(connection);
    });
    this.listInputPorts.forEach((portId) => {
      this.jsPlumbInstance.deleteEndpoint(portId);
    });
    this.listOutputPorts.forEach((portId) => {
      this.jsPlumbInstance.deleteEndpoint(portId);
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
        this.listInputPorts.push(port.id);
      });
    }
    if (outputPorts) {
      outputPorts.forEach((port) => {
        this.listOutputPorts.push(port.id);
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
      if (info.sourceId === this.id) {
        this.listOutputConnections.push(info.connection);
        // TODO: set label
        info.connection.setLabel('name_out_' + this.config.name + '_table');
      } else { if (info.targetId === this.id) {
        this.listInputConnections.push(info.connection);
      }
      }
    });
    // delete connection
    this.jsPlumbInstance.bind('connectionDetached', (info) => {
      if (info.sourceId === this.id) {
        this.listOutputConnections.forEach((connection, index) => {
          if (connection.id === info.connection.id) {
            delete this.listOutputConnections[index];
          }
        });
      } else { if (info.targetId === this.id) {
        this.listInputConnections.forEach((connection, index) => {
          if (connection.id === info.connection.id) {
            delete this.listInputConnections[index];
          }
        });
      }
      }
    });
    // delete connection
    this.jsPlumbInstance.bind('connectionMoved', (info) => {
      if (info.originalSourceId === this.id) {
        this.listOutputConnections.forEach((connection, index) => {
          if (connection.id === info.connection.id) {
            delete this.listOutputConnections[index];
          }
        });
      } else { if (info.originalTargetId === this.id) {
        this.listInputConnections.forEach((connection, index) => {
          if (connection.id === info.connection.id) {
            delete this.listInputConnections[index];
          }
        });
      }
      }
    });
  }

  // PROPERTY EDITOR
  private callbackForEditProperty = (config: Task) => {
    this.config = config;
    // set label connections
    this.listOutputConnections.forEach((connection) => {
      // TODO: set label
      connection.setLabel('');
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
