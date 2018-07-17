import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { routes } from './flow-editor.routing';
import { DataSourceService } from './services/data-source.service';
import { FlowEditorComponent } from './flow-editor.component';
import { UbixTaskViewDirective } from './directives/ubix-task-view.directive';
import { UbixMovableViewDirective } from './directives/movable-view.directive';
import { UbixTaskComponent } from './components/ubix-task/ubix-task.component';
import { FlowBuilderComponent } from './components/flow-builder/flow-builder.component';
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';
import { BrutusinService } from './services/brutusin.service';
import { UbixMovableMinimapViewDirective } from './directives/movable-minimap-view.directive';

@NgModule({
  declarations: [
    FlowEditorComponent,
    UbixTaskViewDirective,
    UbixMovableViewDirective,
    UbixTaskComponent,
    FlowBuilderComponent,
    FormRendererComponent,
    UbixMovableMinimapViewDirective,
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [
    DataSourceService,
    BrutusinService
  ],
  entryComponents: [UbixTaskComponent],
})
export class FlowEditorModule {
}
