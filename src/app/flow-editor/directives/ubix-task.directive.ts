import { Directive, HostListener, Input } from '@angular/core';
import { Task } from '../models/task.model';
import {Store} from '../models/store.model';

@Directive({
  selector: '[app-ubix-task]'
})
export class UbixTaskDirective {

  @Input() store: Store;
  @Input() config: Task;

  constructor() { }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    event.target.style.opacity = '0.6';

    this.store.setStore({
      type: 'new_ubix_task',
      event: event,
      data: this.config,
    });
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event) {
    event.target.style.opacity = '1';
  }
}
