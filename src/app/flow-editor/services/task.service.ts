import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private selectedTask = new Subject<any>();
  private selectedTask$ = this.selectedTask.asObservable();

  private submitedTask = new Subject<any>();
  private submitedTask$ = this.submitedTask.asObservable();

  constructor() {
  }

  subscribeOnTaskChanged(observer) {
    this.selectedTask$.subscribe(observer);
  }

  subscribeOnTaskSubmitted(observer) {
    this.submitedTask$.subscribe(observer);
  }

  fireTaskChanged(task) {
    this.selectedTask.next(task);
  }

  fireTaskSubmitted(data) {
    this.submitedTask.next(data);
  }
}
