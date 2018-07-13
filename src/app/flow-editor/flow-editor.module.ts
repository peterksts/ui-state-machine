import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './flow-editor.routing';
import { DataSourceService } from './services/data-source.service';
import { FlowEditorComponent } from './flow-editor.component';
import { UbixTaskDirective } from './directives/ubix-task.directive';
import { FlowEditorDirective } from './directives/flow-editor.directive';
import {UbixMovableViewDirective} from './directives/movable-view.directive';

@NgModule({
  declarations: [
    FlowEditorComponent,
    UbixTaskDirective,
    UbixMovableViewDirective,
    FlowEditorDirective,
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [
    DataSourceService
  ],
})
export class FlowEditorModule { }
