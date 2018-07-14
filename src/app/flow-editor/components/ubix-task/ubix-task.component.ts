import { Component, OnInit, Input, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { Task } from '../../models/task.model';
import { jsPlumbInstance } from 'jsplumb';
import { AddEndpointInputPorts, AddEndpointOutputPorts, GetCenterElement } from '../../services/tools.service';
import { PortOptions } from '../../models/port-options.model';

@Component({
  selector: 'app-ubix-task',
  templateUrl: './ubix-task.component.html',
  styleUrls: ['./ubix-task.component.css']
})
export class UbixTaskComponent implements OnInit, OnDestroy {

  @Input() id: string;
  @Input() el: ElementRef;
  @Input() config: Task;
  @Input() position: { x: number, y: number, type: string };
  @Input() jsPlumbInstance: jsPlumbInstance;
  @Input() onDeleteTask: (id: string) => void;
  @Input() onMoveTask: (id: string, positionX: number, positionY: number) => void;
  @Input() onCreateTask: (task: HTMLElement, positionX: number, positionY: number, config: Task) => void;

  private interval: any; // for destroy UbixTaskComponent
  private mouseStartPositionX: number;
  private mouseStartPositionY: number;
  private pressed = false;
  public title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.onDeleteTask(this.id);
    clearInterval(this.interval);
  }

  public init() {
    this.el.nativeElement.id = this.id;
    this.el.nativeElement.setAttribute('class', 'flow-editor-task');
    this.el.nativeElement.innerText = this.config.name || 'task';

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
    AddEndpointInputPorts(this.id, PortOptions, countInput, this.jsPlumbInstance, this.id, '');
    AddEndpointOutputPorts(this.id, PortOptions, countOutput, this.jsPlumbInstance, this.id, '');

    this.jsPlumbInstance.repaintEverything();
    // callback
    if (this.onCreateTask) {
      this.onCreateTask(this.el.nativeElement, this.position.x, this.position.y, this.config);
    }
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event) {
    this.mouseStartPositionX = event.clientX;
    this.mouseStartPositionY = event.clientY;
    this.pressed = true;
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
