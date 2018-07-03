import { Component, OnInit } from '@angular/core';
import {jsPlumb, jsPlumbInstance} from 'jsplumb';


@Component({
  selector: 'app-test-plumb',
  templateUrl: './test-plumb.component.html',
  styleUrls: ['./test-plumb.component.css']
})
export class TestPlumbComponent implements OnInit {
  private jsPlumbInstance: jsPlumbInstance;

  constructor() { }

  ngOnInit() {
    this.jsPlumbInstance = jsPlumb.getInstance();
    this.jsPlumbInstance.setContainer('diagramContainer');
    // add endpoints
    this.jsPlumbInstance.addEndpoint('item_left',
      {
        anchor: 'Right',
        maxConnections: 1,
        parameters: {},
        id: 'item_left_right',
        scope: '1.0',
        reattachConnections: true,
        type: 'Dot',
        isSource: true,
        isTarget: true,
        connector: 'Straight',
        paintStyle: {fill: 'white', stroke: 'blue', strokeWidth: 3},
        hoverPaintStyle: {stroke: 'lightblue'},
        connectorStyle: {stroke: 'green', strokeWidth: 1},
        connectorHoverStyle: {strokeWidth: 2}
      });
    //
    this.jsPlumbInstance.addEndpoint('item_right',
      {
        anchor: 'Right',
        maxConnections: 1,
        parameters: {},
        id: 'item_right_right',
        scope: '1.0',
        reattachConnections: true,
        type: 'Dot',
        isSource: true,
        isTarget: true,
        connector: 'Straight',
        paintStyle: {fill: 'white', stroke: 'blue', strokeWidth: 3},
        hoverPaintStyle: {stroke: 'lightblue'},
        connectorStyle: {stroke: 'green', strokeWidth: 1},
        connectorHoverStyle: {strokeWidth: 2}
      });
    //
    this.jsPlumbInstance.addEndpoint('item_right',
      {
        anchor: 'Left',
        maxConnections: 2,
        parameters: {},
        id: 'item_right_left',
        scope: '1.0',
        reattachConnections: true,
        type: 'Dot',
        isSource: true,
        isTarget: true,
        connector: 'Straight',
        paintStyle: {fill: 'white', stroke: 'blue', strokeWidth: 3},
        hoverPaintStyle: {stroke: 'lightblue'},
        connectorStyle: {stroke: 'green', strokeWidth: 1},
        connectorHoverStyle: {strokeWidth: 2}
      });
    //
    this.jsPlumbInstance.addEndpoint('item_right',
      {
        anchor: 'TopLeft',
        maxConnections: 2,
        parameters: {},
        id: 'item_right_left_2',
        scope: '1.0',
        reattachConnections: true,
        type: 'Dot',
        isSource: true,
        isTarget: true,
        connector: 'Straight',
        paintStyle: {fill: 'white', stroke: 'blue', strokeWidth: 3},
        hoverPaintStyle: {stroke: 'lightblue'},
        connectorStyle: {stroke: 'green', strokeWidth: 1},
        connectorHoverStyle: {strokeWidth: 2}
      });
    //
    this.addListener();
  }

  private addListener(): void {
    const main = this;
    const divAll = document.getElementById('diagramContainer').
      querySelectorAll('div');
    // set EventListener
    for (let i = 0; i < divAll.length; i++) {
      const div = divAll.item(i);
      // mouse down
      div.addEventListener('mousedown', function (e) {
        if (this.getAttribute('name') !== 'item_box') {
          return;
        }
        //
        move_div = this;
        mouse_start_x = e.clientX;
        mouse_start_y = e.clientY;
        // mouse move
        div.addEventListener('mousemove', main.moveItem);
      });
      // mouse up
      div.addEventListener('mouseup', function () {
        div.removeEventListener('mousemove', main.moveItem);
      });
    }
  }

  private moveItem(even): void {
    const start_position_x = parseInt(move_div.style.left.slice(0, move_div.style.left.length - 2), null);
    const start_position_y = parseInt(move_div.style.top.slice(0, move_div.style.top.length - 2), null);
    let new_position_x = start_position_x;
    let new_position_y = start_position_y;
    // set new x item
    if (even.clientX > mouse_start_x) {
      new_position_x = start_position_x + (even.clientX - mouse_start_x);
    }
    if (even.clientX < mouse_start_x) {
      new_position_x = start_position_x - (mouse_start_x - even.clientX);
    }
    // set new y item
    if (even.clientY > mouse_start_y) {
      new_position_y = start_position_y + (even.clientY - mouse_start_y);
    }
    if (even.clientY < mouse_start_y) {
      new_position_y = start_position_y - (mouse_start_y - even.clientY);
    }
    // set position item
    mouse_start_x = even.clientX;
    mouse_start_y = even.clientY;
    move_div.style.left = new_position_x + 'px';
    move_div.style.top = new_position_y + 'px';
  }
}

let mouse_start_x;
let mouse_start_y;
let move_div;
