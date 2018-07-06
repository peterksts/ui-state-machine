import {Component, OnInit} from '@angular/core';
import {Task} from './models/task.model';
import {FlowEditor} from './models/flow-editor.model';
import {Minimap} from './models/minimap.model';
import {DataSourceService} from './services/data-source.service';

@Component({
  selector: 'app-flow-editor',
  templateUrl: './flow-editor.component.html',
  styleUrls: ['./flow-editor.component.css']
})
export class FlowEditorComponent implements OnInit {

  public tasksLibrary: Task[];
  public flowEditor: FlowEditor;
  private minimap: Minimap;

  constructor(private dataSource: DataSourceService) {
  }

  ngOnInit() {
    this.dataSource.getTasksLibrary().then((res: Task[]) => {
      this.tasksLibrary = res;
    });

    this.flowEditor = new FlowEditor('flow-editor');
    this.minimap = new Minimap('minimap', {});
  }
}
