import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private selectedTask = new Subject<any>();
  private selectedTask$ = this.selectedTask.asObservable();

  private submittedTask = new Subject<any>();
  private submittedTask$ = this.submittedTask.asObservable();

  constructor() {
  }

  subscribeOnTaskChanged(observer) {
    this.selectedTask$.subscribe(observer);
  }

  subscribeOnTaskSubmitted(observer) {
    this.submittedTask$.subscribe(observer);
  }

  fireTaskChanged(task) {
    this.selectedTask.next(task);
  }

  fireTaskSubmitted(data) {
    this.submittedTask.next(data);
  }
}
