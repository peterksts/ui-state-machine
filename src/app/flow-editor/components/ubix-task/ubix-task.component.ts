import {Component, OnInit, Input, HostListener, ElementRef} from '@angular/core';
import {Task} from '../../models/task.model';
import {jsPlumbInstance} from 'jsplumb';
import {AddEndpointInputPorts, AddEndpointOutputPorts, GetCenterElement} from '../../services/tools.service';
import {PortOptions} from '../../models/port-options.model';

@Component({
  selector: 'app-ubix-task',
  templateUrl: './ubix-task.component.html',
  styleUrls: ['./ubix-task.component.css']
})
export class UbixTaskComponent implements OnInit {

  @Input() id: string;
  @Input() el: ElementRef;
  @Input() config: Task;
  @Input() position: { x: number, y: number, type: string };
  @Input() jsPlumbInstance: jsPlumbInstance;
  @Input() onDeleteTask: (id: string) => void;
  @Input() onMoveTask: (id: string, positionX: number, positionY: number) => void;
  @Input() onCreateTask: (task: HTMLElement, positionX: number, positionY: number, config: Task) => void;

  private task: HTMLElement;
  private mouseStartPositionX: number;
  private mouseStartPositionY: number;
  private pressed = false;
  public positionX = 0;
  public positionY = 0;
  public title: string;

  constructor() {
  }

  ngOnInit(): void {
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
    this.positionX = this.position.x;
    this.positionY = this.position.y;
    this.el.nativeElement.style.left = '10px';
    this.el.nativeElement.style.top = '10px';
    // add endpoint
    const countInput = this.config.consumes.length || 0;
    const countOutput = this.config.produces.length || 0;
    AddEndpointInputPorts(this.id, PortOptions, countInput, this.jsPlumbInstance, this.id, '');
    AddEndpointOutputPorts(this.id, PortOptions, countOutput, this.jsPlumbInstance, this.id, '');

    this.jsPlumbInstance.repaint(this.el.nativeElement);
    // callback
    if (this.onCreateTask) {
      this.onCreateTask(this.el.nativeElement, this.positionX, this.positionY, this.config);
    }
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event) {
    this.mouseStartPositionX = event.clientX;
    this.mouseStartPositionY = event.clientY;
    this.pressed = true;
  }

  @HostListener('mousemove', ['$event'])
  mouseMove(event) {
    if (!this.pressed) {
      return;
    }

    const startPositionX = this.positionX;
    const startPositionY = this.positionY;
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
    this.positionX = newPositionX;
    this.positionY = newPositionY;
    this.jsPlumbInstance.repaint(this.task);
    // callback
    if (this.onMoveTask) {
      this.onMoveTask(this.id, this.positionX, this.positionY);
    }
  }

  @HostListener('mouseup', ['$event'])
  mouseUp(event) {
    this.pressed = false;
  }
}
