import {Routes} from '@angular/router';
import {FlowEditorComponent} from './flow-editor.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Editor',
    pathMatch: 'full'
  },
  {path: 'Editor', component: FlowEditorComponent },
  {path: '**', redirectTo: '/Editor'}
];
