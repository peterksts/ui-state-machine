import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private selectedTask = new Subject<any>();
  private selectedTask$ = this.selectedTask.asObservable();

  constructor() {
  }

  subscribeOnTaskChanged(observer) {
    this.selectedTask$.subscribe(observer);
  }

  fireTaskChanged(task) {
    this.selectedTask.next(task);
  }
}
