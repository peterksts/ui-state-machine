import { Component, Inject, Input, OnInit } from '@angular/core';
import { BrutusinService } from '../../services/brutusin.service';
import { TaskService } from '../../services/task.service';
import { IBrutusinForm } from '../../models/binding.interfaces';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css']
})

export class FormRendererComponent implements OnInit {

  @Input() schema: any;
  @Input() data: any;
  @Input() formHidden: Boolean;

  private formElement: HTMLElement;
  private form: IBrutusinForm;

  public task: Task;

  constructor(@Inject(BrutusinService) public brutusin: any, @Inject(TaskService) public taskService: TaskService) {
    this.hideForm(true);
    taskService.subscribeOnTaskChanged(this.onTaskChanged);
  }

  ngOnInit() {
    this.defineFormContainer();
    this.renderForm(this.schema, this.data);
  }

  public onSaveButtonClick() {
    if (this.form && this.form.validate() && this.task) {
      this.task.data = this.form.getData();
      this.taskService.fireTaskSubmitted(this.task);
    }
  }

  private renderForm(schema: any, data: any) {
    this.form = this.brutusin.create(schema) as IBrutusinForm;
    this.form.render(this.formElement, data);
  }

  private defineFormContainer() {
    this.formElement = document.getElementById('form') as HTMLElement;
  }

  private destroyForm() {
    this.formElement.innerHTML = '';
  }

  private hideForm(isHidden: Boolean) {
    this.formHidden = isHidden;
  }

  private onTaskChanged(task: Task) {
    this.task = task;
    this.destroyForm();
    if (this.task) {
      this.renderForm(this.task.schema, this.task.data);
      this.hideForm(false);
    } else {
      this.hideForm(true);
    }
  }
}
