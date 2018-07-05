import {Component, OnInit} from '@angular/core';
import {Task} from './models/task.model';
import {FlowEditor} from './models/flow-editor.model';
import {Minimap} from './models/minimap.model';
import {DataSourceService} from './services/data-source.service';
import {SelectTask} from './models/select-task.model';

@Component({
  selector: 'app-flow-editor',
  templateUrl: './flow-editor.component.html',
  styleUrls: ['./flow-editor.component.css']
})
export class FlowEditorComponent implements OnInit {

  public tasksLibrary: Task[];
  private flowEditor: FlowEditor;
  private minimap: Minimap;

  constructor(private dataSource: DataSourceService) {
  }

  ngOnInit() {
    this.dataSource.getTasksLibrary().then((res: Task[]) => {
      this.tasksLibrary = res;
    });

    this.flowEditor = new FlowEditor('flow-editor');
    this.flowEditor.createNewTask({});
    this.minimap = new Minimap('minimap', {});

    const selectTask = new SelectTask(this.flowEditor, 'select-task');
  }
}
