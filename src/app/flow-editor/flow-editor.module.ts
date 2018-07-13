import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './flow-editor.routing';
import { DataSourceService } from './services/data-source.service';
import { FlowEditorComponent } from './flow-editor.component';
import { UbixTaskViewDirective } from './directives/ubix-task-view.directive';
import { FlowEditorDirective } from './directives/flow-editor.directive';
import { UbixMovableViewDirective } from './directives/movable-view.directive';
import { UbixTaskComponent } from './components/ubix-task/ubix-task.component';

@NgModule({
  declarations: [
    FlowEditorComponent,
    UbixTaskViewDirective,
    UbixMovableViewDirective,
    FlowEditorDirective,
    UbixTaskComponent,
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [
    DataSourceService
  ],
  entryComponents: [UbixTaskComponent],
})
export class FlowEditorModule { }
