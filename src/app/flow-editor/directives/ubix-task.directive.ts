import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[app-ubix-task]'
})
export class UbixTaskDirective {

  constructor() { }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    event.target.style.opacity = '0.6';
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event) {
    event.target.style.opacity = '1';
  }
}
