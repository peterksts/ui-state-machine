import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { FlowEditor } from '../models/flow-editor.model';

import { GetCenterElement } from '../services/tools.service';

@Directive({
  selector: '[app-ubix-task]',
})
export class UbixTaskDirective {

  @Input() flowEditor: FlowEditor;
  @Input() ubixTaskConfig: any;

  private moveNewUbixTask = false;
  private newUbixTask: HTMLElement;
  private centerElementNewUbixTask: {x: number, y: number} = {x: 0, y: 0};

  constructor(private el: ElementRef
  ) { }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    this.newUbixTask = document.createElement('div');
    this.newUbixTask.className = this.el.nativeElement.className;
    this.newUbixTask.innerHTML = this.el.nativeElement.innerHTML;
    this.newUbixTask.style.position = 'absolute';
    document.body.appendChild(this.newUbixTask);

    this.centerElementNewUbixTask = GetCenterElement(this.newUbixTask);
    this.setNewPositionElement(event.clientX, event.clientY, 0, 0);

    this.moveNewUbixTask = true;
  }

  @HostListener('window:mousemove', ['$event'])
    onWindowMouseMove(event) {
    if (!this.moveNewUbixTask) { return; }

    document.body.style.cursor = 'pointer';
    this.setNewPositionElement(event.clientX, event.clientY, 0, 0);
  }

  @HostListener('window:mouseup', ['$event'])
  onWindowMouseUp(event) {
    if (!this.moveNewUbixTask) { return; }

    document.body.removeChild(this.newUbixTask);

    const rect = document.getElementById(this.flowEditor.getContainerId()).getBoundingClientRect();
    if (rect.top < event.clientY && rect.bottom > event.clientY && rect.left < event.clientX && rect.right > event.clientX) {
      const idElementNewUbixTask = this.flowEditor.createNewTask(this.ubixTaskConfig);
      this.newUbixTask = document.getElementById(idElementNewUbixTask);

      this.centerElementNewUbixTask = GetCenterElement(this.newUbixTask);
      this.setNewPositionElement(event.clientX, event.clientY, rect.left, rect.top);
      this.flowEditor.repaintAllEndpoint();
    }

    document.body.style.cursor = 'default';
    this.moveNewUbixTask = false;
  }

  setNewPositionElement(x: number, y: number, amendmentX: number, amendmentY: number): void {
    this.newUbixTask.style.left = (x - amendmentX - this.centerElementNewUbixTask.x) + 'px';
    this.newUbixTask.style.top = (y - amendmentY - this.centerElementNewUbixTask.y) + 'px';
  }
}
