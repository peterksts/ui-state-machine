import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateMachineComponent } from './components/state-machine/state-machine.component';
import { TestPlumbComponent } from './components/test-plumb/test-plumb.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConnectionService } from './services/connection.service';
import { StateService } from './services/state.service';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StateMachineComponent,
    TestPlumbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    ConnectionService,
    StateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
