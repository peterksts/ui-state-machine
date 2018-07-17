import { Component, Inject, Input, OnInit } from '@angular/core';
import { BrutusinService } from '../../services/brutusin.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css']
})

export class FormRendererComponent implements OnInit {

  @Input() schema: any;
  @Input() data: any;

  private formElement: HTMLElement;

  constructor(@Inject(BrutusinService) public brutusin: any, @Inject(TaskService) public taskService: TaskService) {
    taskService.subscribeOnTaskChanged((t) => {
      console.log(['form-renderer: task has been changed', t]);
    });
  }

  ngOnInit() {
    this.defineFormContainer();
    this.create();
  }

  create() {
    const bf = this.brutusin.create(this.schema);
    bf.render(this.formElement, this.data);
  }

  private defineFormContainer() {
    this.formElement = document.getElementById('form') as HTMLElement;
  }

}
