import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConnectionService } from './services/connection.service';
import { StateService } from './services/state.service';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
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
