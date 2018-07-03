import { Component, OnInit } from '@angular/core';

import { ConnectionService } from '../../services/connection.service';
import {StateService} from '../../services/state.service';

declare var Raphael: any;

@Component({
  selector: 'app-state-machine',
  templateUrl: './state-machine.component.html',
  styleUrls: ['./state-machine.component.css']
})
export class StateMachineComponent implements OnInit {
  private paper;

  constructor(public connectionService: ConnectionService,
              public stateService:      StateService,
  ) { }

  ngOnInit() {
    this.paper = Raphael('flowchart', 800, 600);
    // TODO constructor function State.make() that hides new
    const start  = this.stateService.State('Unassigned', 30, 30, true, this.paper, this.connectionService);
    const middle = this.stateService.State('Under Review', 300, 200, false,  this.paper, this.connectionService);
    const review = this.stateService.State('Internal Review', 600, 100, false,  this.paper, this.connectionService);
    const limbo  = this.stateService.State('Limbo', 250, 350, false, this.paper, this.connectionService);
    const dead   = this.stateService.State('Dead', 200, 500, false,  this.paper, this.connectionService);
    const end    = this.stateService.State('Registered', 660, 500, true,  this.paper, this.connectionService);
    // // TODO constructor function State.connect() that accepts names
    this.connectionService.Connection(start, middle, 'Assigned to Attorney', this.paper);
    this.connectionService.Connection(middle, limbo, 'Rejected', this.paper);
    this.connectionService.Connection(limbo, dead, 'After 6 Months', this.paper);
    this.connectionService.Connection(limbo, review, 'Appeal', this.paper);
    this.connectionService.Connection(middle, end, 'Accepted', this.paper);
    this.zoomView(null, 1.0);
  }

  private zoomView(event?, zoom?: number): void {
    let scale = 1.0;
    if (event) {
      scale = event.target.value;
    } else { if (zoom) {
      scale = zoom;
    }
    }
    scale = 1.0 / (scale || 1.0);
    const w = 800 * scale,
          h = 600 * scale,
          x = (800 - w) * 0.5,
          y = (600 - h) * 0.5;
    this.paper._origin = {x: x, y: y};
    this.paper._scale = scale;
    this.paper.setViewBox(x, y, w, h);
  }

  newState() {
    const name = prompt('Name for new state', 'Untitled');
    if (name) {
      this.stateService.State(name, 0, 0, false, this.paper, this.connectionService);
    }
  }
}
