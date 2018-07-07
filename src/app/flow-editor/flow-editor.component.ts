import {Component, OnInit } from '@angular/core';
import {Task} from './models/task.model';
import {Minimap} from './models/minimap.model';
import {DataSourceService} from './services/data-source.service';
import { Store } from './models/store.model';

@Component({
  selector: 'app-flow-editor',
  templateUrl: './flow-editor.component.html',
  styleUrls: ['./flow-editor.component.css']
})
export class FlowEditorComponent implements OnInit {

  public tasksLibrary: Task[];
  public store: Store = new Store();
  public minimap: Minimap;

  constructor(private dataSource: DataSourceService) {
  }

  ngOnInit() {
    this.dataSource.getTasksLibrary().then((res: Task[]) => {
      this.tasksLibrary = res;
    });

    this.minimap = new Minimap('minimap');
  }
}
