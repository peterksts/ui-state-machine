import { Injectable } from '@angular/core';

declare var Raphael: any;

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  mainConnectionService: ConnectionService;
  connectionAll:         ConnectionService[] = [];
  _x = 0;
  _y = 0;
  paper:     any;
  caption:   any;
  path:      any;
  fromState: any;
  toState:   any;
  name:      any;

  constructor() { }

  Connection(fromState, toState, name: string, paper: any): ConnectionService {
    const connectionService = new ConnectionService();
    connectionService.mainConnectionService = this;
    connectionService.paper                 = paper;
    connectionService.fromState             = fromState;
    connectionService.toState               = toState;
    connectionService.name                  = name;
    // setup path
    connectionService.path = paper.path('');
    connectionService.path.node.classList.add('connection');
    connectionService.path._connection = connectionService;
    const self = connectionService;
    connectionService.path.dblclick(function() {
      self.edit();
    });

    // setup caption
    connectionService.caption = paper.text(-1000, -1000, this.name)
      .attr('font-family', 'Helvetica,Arial,Sans-serif')
      .attr('font-size', '13px');

    connectionService.caption.node.classList.add('connection-caption');

    if (toState && name) {
      connectionService.update();
    }

    this.connectionAll.push(connectionService);

    return connectionService;
  }

  edit() {
    const name = prompt('Enter new name for connection:', this.name);
    if (name) {
      this.name = name;
      this.update();
    }
  }

  remove(what: any) {
    for (let i = this.mainConnectionService.connectionAll.length - 1; i >= 0; i--) {
      if (this.mainConnectionService.connectionAll[i] === what) {
        this.mainConnectionService.connectionAll.splice(i, 1);
      }
    }
    what.path.remove();
    what.caption.remove();
  }

  drawTempLineTo(x: number, y: number) {
    const bounds = this.fromState.rect.getBBox(),
      xc = bounds.x + bounds.width * 0.5,
      yc = bounds.y + bounds.height * 0.5,
      direction = (x - xc) > (y - yc) ? 'right' : 'down',
      x0 = direction === 'right' ? bounds.x2 : xc,
      y0 = direction === 'down' ? bounds.y2 : yc,
      p = this.connectingPath(x0, y0, x, y, direction);

    this._x = x;
    this._y = y;
    this.path.attr('path', p);

    // hide connection if we're inside the starting box
    if (this.fromState.rect.isPointInside(x, y)) {
      this.path.hide();
    } else {
      this.path.show();
    }
    return this;
  }

  update() {
    const fromBounds = this.fromState.rect.getBBox(),
      toBounds = this.toState.rect.getBBox(),
      dx = toBounds.x - fromBounds.x,
      dy = toBounds.y - fromBounds.y,
      outDirection = dx > dy ? 'right' : 'down',
      inDirection = dx > dy ? 'left' : 'up',
      x0 = outDirection === 'right' ? fromBounds.x2 : fromBounds.x + fromBounds.width / 2,
      y0 = outDirection === 'down' ? fromBounds.y2 : fromBounds.y + fromBounds.height / 2,
      x1 = inDirection === 'left' ? toBounds.x : toBounds.x + toBounds.width / 2,
      y1 = inDirection === 'up' ? toBounds.y : toBounds.y + toBounds.height / 2;

    this.path.attr('path', this.connectingPath(x0, y0, x1, y1, outDirection, inDirection));
    const textLoc = this.path.getPointAtLength(this.path.getTotalLength() * 0.25);
    // TODO might need to optimize setting text all the time
    this.caption.attr('x', textLoc.x).attr('y', textLoc.y).attr('text', this.name);
  }

  finalize() {
    const over = this.paper.getElementsByPoint(this._x, this._y);
    // reverse order so we find topmost first
    for (let i = over.length - 1; i >= 0; i--) {
      const elt = over[i];
      if (elt._state && elt._state !== this.fromState) {
        const name = prompt('Enter name for connection', this.fromState.name + ' to ' + elt._state.name);
        if (name) {
          this.name = name;
          this.toState = elt._state;
          this.update();
        }
        break;
      }
    }

    if (!this.toState) {
      this.mainConnectionService.remove(this);
    }
    return this;
  }

  connectingPath(x0: number, y0: number, x1: number, y1: number, outDirection: string, inDirection?: string) {
    const p = inDirection
      ? 'M{0},{1} C{2},{3} {4},{5} {6},{7} M{8},{9} L{6},{7} L{10},{11}'
      : 'M{0},{1} C{2},{3} {4},{5} {6},{7}',
      ax = x1 - 5, ay = y1 - 5; // arrowhead
    let x0h = x0, y0h = y0, x1h = x1, y1h = y1, // bezier handles
      bx = x1 - 5, by = y1 - 5; // arrowhead

    // outgoing
    switch (outDirection) {
      case 'down':
        y0h += 100;
        break;
      case 'right':
        x0h += 100;
        break;
    }
    // incoming
    switch (inDirection) {
      case 'up':
        bx += 10;
        y1h -= 100;
        break;
      case 'left':
        by += 10;
        x1h -= 100;
        break;
    }
    return Raphael.format(p, x0, y0, x0h, y0h, x1h, y1h, x1, y1, ax, ay, bx, by);
  }


}
