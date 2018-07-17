import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Editor',
    pathMatch: 'full'
  },
  {path: 'Flow', loadChildren: './flow-editor/flow-editor.module#FlowEditorModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true
});
