import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Task } from './models/task.model';
import { Minimap } from './models/minimap.model';
import { DataSourceService } from './services/data-source.service';
import { Store } from './models/store.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VegaComponent} from './components/vega/vega.component';

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
    this.dataSource.getTasksLibrary().then((res: Task[]) => {
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
