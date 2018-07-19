import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[ubix-task-view]'
})
export class UbixTaskViewDirective {

  constructor() {
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    event.target.style.opacity = '0.6';
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event) {
    event.target.style.opacity = '1';
  }
}
