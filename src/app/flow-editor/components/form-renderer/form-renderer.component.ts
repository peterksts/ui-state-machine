import { Component, Inject, Input, OnInit } from '@angular/core';
import { BrutusinService } from '../../services/brutusin.service';
import { TaskService } from '../../services/task.service';
import { IBrutusinForm } from '../../models/binding.interfaces';

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
  private form: IBrutusinForm; // render, validate, getData, getRenderingContainer

  public task: any;

  constructor(@Inject(BrutusinService) public brutusin: any, @Inject(TaskService) public taskService: TaskService) {
    this.hideForm(true);

    taskService.subscribeOnTaskChanged((t) => {
      this.task = t;
      console.log(['form-renderer: task has been changed', t]);
    });
  }

  ngOnInit() {
    this.defineFormContainer();
    this.renderForm(this.schema, this.data);
  }

  public onSaveButtonClick() {
    if (this.form && this.form.validate()) {
      this.taskService.fireTaskSubmitted({
        task: this.task,
        data: this.form.getData()
      });
    }
  }

  private renderForm(schema: any, data: any) {
    this.form = this.brutusin.create(schema) as IBrutusinForm;
    this.form.render(this.formElement, data);
  }

  private defineFormContainer() {
    this.formElement = document.getElementById('form') as HTMLElement;
  }

  private hideForm(isHidden: Boolean) {
    this.formHidden = isHidden;
  }

}
