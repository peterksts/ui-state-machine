import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './flow-editor.routing';
import { DataSourceService } from './services/data-source.service';
import { FlowEditorComponent } from './flow-editor.component';
import { UbixTaskViewDirective } from './directives/ubix-task-view.directive';
import { UbixMovableViewDirective } from './directives/movable-view.directive';
import { UbixTaskComponent } from './components/ubix-task/ubix-task.component';
import { FlowBuilderComponent } from './components/flow-builder/flow-builder.component';
import {VegaComponent} from './components/vega/vega.component';

@NgModule({
  declarations: [
    FlowEditorComponent,
    UbixTaskViewDirective,
    UbixMovableViewDirective,
    UbixTaskComponent,
    FlowBuilderComponent,
    VegaComponent
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [
    DataSourceService
  ],
  entryComponents: [
    UbixTaskComponent,
    VegaComponent
  ]
})
export class FlowEditorModule { }
