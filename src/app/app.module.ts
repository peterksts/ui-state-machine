import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateMachineComponent } from './components/state-machine/state-machine.component';
import { TestPlumbComponent } from './components/test-plumb/test-plumb.component';

import { ConnectionService } from './services/connection.service';
import { StateService } from './services/state.service';

@NgModule({
  declarations: [
    AppComponent,
    StateMachineComponent,
    TestPlumbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ConnectionService,
    StateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
