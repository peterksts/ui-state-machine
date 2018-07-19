import { Component, OnInit } from '@angular/core';

import { ITaskTemplate, Task } from './models/task.model';
import { Store } from './models/store.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VegaComponent} from './components/vega/vega.component';
import { DataSourceService } from './services/data-source.service';

@Component({
  selector: 'app-flow-editor',
  templateUrl: './flow-editor.component.html',
  styleUrls: ['./flow-editor.component.css']
})
export class FlowEditorComponent implements OnInit {

  public tasksLibrary: any;
  public store: Store = new Store();

  constructor(private dataSource: DataSourceService,
              private modal: NgbModal) {
  }

  ngOnInit() {
    this.dataSource.getTasksLibrary().then((res: ITaskTemplate[]) => {
      // this.dataSource.getTasks().then((res: Task[]) => {
      this.tasksLibrary = res;
    });
  }

  public getCategoryName(category: string): string {
    return category + ' Tasks';
  }

  public vega() {
    const vega = this.modal.open(VegaComponent);
    vega.result.then().catch();
  }
}
