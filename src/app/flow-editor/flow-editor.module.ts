import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './flow-editor.routing';
import {FlowEditorComponent} from './flow-editor.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DataSourceService} from './services/data-source.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FlowEditorComponent,
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
