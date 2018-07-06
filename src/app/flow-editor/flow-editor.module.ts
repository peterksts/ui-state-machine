import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './flow-editor.routing';
import { FlowEditorComponent } from './flow-editor.component';
import { DataSourceService } from './services/data-source.service';
import { UbixTaskDirective } from './directives/ubix-task.directive';

@NgModule({
  declarations: [
    FlowEditorComponent,
    UbixTaskDirective,
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [
    DataSourceService
  ]
})
export class FlowEditorModule { }
