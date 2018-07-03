import { Injectable } from '@angular/core';
import {ConnectionService} from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private icons = {
    plus: 'M25.979,12.896 19.312,12.896 19.312,6.229 12.647,6.229 12.647,12.896 5.979,12.896 5.979,19.562' +
    ' 12.647,19.562 12.647,26.229 19.312,26.229 19.312,19.562 25.979,19.562z',
    chain: 'M16.45,18.085l-2.47,2.471c0.054,1.023-0.297,2.062-1.078,2.846c-1.465,1.459-3.837,1.459-5.302-0.' +
    '002c-1.461-1.465-1.46-3.836-0.001-5.301c0.783-0.781,1.824-1.131,2.847-1.078l2.469-2.469c-2.463-1.' +
    '057-5.425-0.586-7.438,1.426c-2.634,2.637-2.636,6.907,0,9.545c2.638,2.637,6.909,2.635,9.545,0l0.001,' +
    '0.002C17.033,23.511,17.506,20.548,16.45,18.085zM14.552,12.915l2.467-2.469c-0.053-1.023,0.297-2.062,1.' +
    '078-2.848C19.564,6.139,21.934,6.137,23.4,7.6c1.462,1.465,1.462,3.837,0,5.301c-0.783,0.783-1.822,1.' +
    '132-2.846,1.079l-2.469,2.468c2.463,1.057,5.424,0.584,7.438-1.424c2.634-2.639,2.633-6.91,0-9.546c-2.' +
    '639-2.636-6.91-2.637-9.545-0.001C13.967,7.489,13.495,10.451,14.552,12.915zM18.152,10.727l-7.424,7.' +
    '426c-0.585,0.584-0.587,1.535,0,2.121c0.585,0.584,1.536,0.584,2.121-0.002l7.425-7.424c0.584-0.586,0.' +
    '584-1.535,0-2.121C19.687,10.141,18.736,10.142,18.152,10.727z',
    arrow: 'M5,-0 L14,7 L5,14 L5,9 L0,9 L0,5 L5,5 L5,-0 z',
    close: 'M11.3,0 L14,2.7 L9.7,7 L14,11.3 L11.3,14 L7,9.7 L2.7,14 L0,11.3 L4.3,7 L0,2.7 L2.7,0 L7,4.3 z',
    lock:  'M5,0 C6.817,0.019 8.419,1.227 8.874,3 C8.959,3.33 8.991,3.661 9,4 L9,7 L10,7 L10,14 L0,14 L0,7' +
    ' L1,7 L1,4 C1.008,2.476 1.889,1.057 3.266,0.394 C3.766,0.154 4.247,0.061 4.794,0.005 z M5,2 C4.271,2.013' +
    ' 3.592,2.399 3.241,3.047 C3.078,3.348 3.017,3.662 3,4 L3,7 L7,7 L7,4 C6.987,3.271 6.601,2.592 5.953,2.241 C5.642,2.073' +
    ' 5.548,2.08 5.204,2.01 z'
  };
  mainStateService:      StateService;
  stateAll:              StateService[] = [];
  mainConnectionService: ConnectionService;
  paper:           any;
  name:            any;
  x:               number;
  y:               number;
  _dx:             number;
  _dy:             number;
  locked:          any;
  rect:            any;
  caption:         any;
  lockButton:      any;
  _tempConnection: ConnectionService;
  link:            any;

  constructor() { }

  State(name: string, x: number, y: number, locked, paper: any, mainConnectionService: ConnectionService): StateService {
    const stateService = new StateService();
    stateService.mainStateService = this;
    stateService.mainConnectionService = mainConnectionService;
    stateService.name = name;
    stateService.x = x || 200;
    stateService.y = y || 200;
    stateService.locked = !!locked;
    stateService.paper = paper;
    stateService.rect = paper.rect(stateService.x, stateService.y, 100, 60, 6);
    stateService.rect._state = stateService;
    stateService.caption = paper.text(stateService.x + 50, stateService.y + 8, stateService.name)
      .attr('font-family', 'Helvetica,Arial,Sans-serif')
      .attr('font-size', '13px');
    stateService.makeLink();
    stateService.makeLock();

    stateService.caption.node.classList.add('state-caption');
    stateService.rect.node.classList.add('state');

    const self = stateService;
    // TODO: change so that a placeholder is dragged ???
    stateService.rect.drag(function(dx, dy, callX, callY, evt) {
      self.move(callX - self._dx, callY - self._dy);
    }, function(callX, callY, evt) {
      self._dx = callX - self.x;
      self._dy = callY - self.y;
    });

    stateService.rect.dblclick( function() {
      self.edit();
    });

    this.stateAll.push(stateService);

    return stateService;
  }

  move(x: number, y: number) {
    if (this.locked) {
      return;
    }
    this.x = x;
    this.y = y;
    this.rect.attr('x', x)
      .attr('y', y);
    this.caption.attr('x', x + 50)
      .attr('y', y + 8);
    this.makeLink();
    this.makeLock();

    const self = this;
    this.forAllSatisfying(this.mainConnectionService.connectionAll, function() {
      return this.fromState === self || this.toState === self;
    }, function() {
      this.update();
    });
  }

  makeLock() {
    if (this.lockButton) {
      this.lockButton.remove();
    }
    const self = this;
    this.lockButton = this.makeIcon(this.icons.lock, this.x + 4, this.y + 42, 10, 14)
      .mouseup(function() {
        self.locked = !self.locked;
        self.makeLock();
      });

    this.lockButton.node.classList.add('state-lock');
    if (this.locked) {
      this.lockButton.node.classList.add('on');
    }
  }

  makeLink() {
    const self = this;
    function start(x, y, evt) {
      self._tempConnection = this.mainConnectionService.Connection(self, self, self.name, self.paper);
    }
    function move(dx, dy, x, y, evt) {
      self._tempConnection.drawTempLineTo(x, y);
    }
    function end() {
      self._tempConnection.finalize();
      delete self._tempConnection;
    }

    if (self.link) {
      this.link.remove();
    }
    this.link = this.makeIcon(this.icons.arrow, this.x + 82, this.y + 42, 14, 14)
      .drag(move, start, end);

    this.link.node.classList.add('state-link');
  }

  edit() {
    const name = prompt('Enter new name for state:', this.name);
    if (name) {
      this.name = name;
      this.caption.attr('text', name);
    }
  }

  makeIcon (path, x, y, w, h) {
    const icon = this.placeIcon(this.paper.path(path), x, y, w, h);
    return icon;
  }

  placeIcon (icon, x, y, w, h) {
    const bounds = icon.getBBox();
    let   t = 'T' + (x - bounds.x) + ',' + (y - bounds.y);
    if (w && h) {
      t += ',s' + Math.min(w / bounds.width, h / bounds.height);
    }
    // console.log(bounds, t);
    icon.transform(t);
    return icon;
  }

  forAll(array, fn) {
    for (let idx = 0; idx < array.length; idx++) {
      fn.call(array[idx], idx);
    }
  }

  forAllSatisfying(array, filterFn, fn) {
    const a = [];
    this.forAll(array, function(idx) {
      if (filterFn.call(this, idx)) {
        a.push(this);
      }
    });
    this.forAll(a, fn);
  }
}
