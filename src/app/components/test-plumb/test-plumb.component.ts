import { Component, OnInit } from '@angular/core';
import {jsPlumb, jsPlumbInstance} from 'jsplumb';


@Component({
  selector: 'app-test-plumb',
  templateUrl: './test-plumb.component.html',
  styleUrls: ['./test-plumb.component.css']
})
export class TestPlumbComponent implements OnInit {
  private jsPlumbInstance: jsPlumbInstance;
  //
  private mouse_start_x;
  private mouse_start_y;
  private move_div;
  private main;
  //

  constructor() { }

  ngOnInit() {
    this.jsPlumbInstance = jsPlumb.getInstance();
    this.jsPlumbInstance.setContainer('diagramContainer');
    // add endpoints
    this.jsPlumbInstance.addEndpoint('item_left',
      {
        anchor: 'Top',
        maxConnections: 2,
        parameters: {},
        id: 'item_left_right',
        scope: '1.0',
        reattachConnections: true,
        type: 'Dot',
        isSource: true,
        isTarget: true,
        connector: 'Bezier',
        paintStyle: {fill: 'white', stroke: 'blue', strokeWidth: 3},
        hoverPaintStyle: {stroke: 'lightblue'},
        connectorStyle: {stroke: 'green', strokeWidth: 1},
        connectorHoverStyle: {strokeWidth: 2}
      });
    //
    this.jsPlumbInstance.addEndpoint('item_right',
      {
        anchor: 'Right',
        maxConnections: 2,
        parameters: {},
        id: 'item_right_right',
        scope: '1.0',
        reattachConnections: true,
        type: 'Dot',
        isSource: true,
        isTarget: true,
        connector: 'Bezier',
        paintStyle: {fill: 'white', stroke: 'blue', strokeWidth: 3},
        hoverPaintStyle: {stroke: 'lightblue'},
        connectorStyle: {stroke: 'green', strokeWidth: 1},
        connectorHoverStyle: {strokeWidth: 2}
      });
    //
    this.jsPlumbInstance.addEndpoint('item_right',
      {
        anchor: [0, 0.3],
        maxConnections: 2,
        parameters: {},
        id: 'item_right_left',
        scope: '1.0',
        reattachConnections: true,
        type: 'Dot',
        isSource: true,
        isTarget: true,
        connector: 'Bezier',
        paintStyle: {fill: 'white', stroke: 'blue', strokeWidth: 3},
        hoverPaintStyle: {stroke: 'lightblue'},
        connectorStyle: {stroke: 'green', strokeWidth: 1},
        connectorHoverStyle: {strokeWidth: 2}
      });
    //
    this.jsPlumbInstance.addEndpoint('item_right',
      {
        anchor: [0, 0.7],
        maxConnections: 2,
        parameters: {},
        id: 'item_right_left_2',
        scope: '1.0',
        reattachConnections: true,
        type: 'Dot',
        isSource: true,
        isTarget: true,
        connector: 'Bezier',
        paintStyle: {fill: 'white', stroke: 'blue', strokeWidth: 3},
        hoverPaintStyle: {stroke: 'lightblue'},
        connectorStyle: {stroke: 'green', strokeWidth: 1},
        connectorHoverStyle: {strokeWidth: 2}
      });
    //
    this.jsPlumbInstance.addEndpoint('item_bottom',
      {
        anchor: [-0.1, 0.5],
        maxConnections: 2,
        parameters: {},
        id: 'item_bottom_left',
        scope: '1.0',
        reattachConnections: true,
        type: 'Dot',
        isSource: true,
        isTarget: true,
        connector: 'Bezier',
        paintStyle: {fill: 'white', stroke: 'blue', strokeWidth: 3},
        hoverPaintStyle: {stroke: 'lightblue'},
        connectorStyle: {stroke: 'green', strokeWidth: 1},
        connectorHoverStyle: {strokeWidth: 2}
      });
    //
    this.main = this;
    this.jsPlumbInstance.repaintEverything();
    // window resize
    //
    this.addSelectItems();
    //
    this.addListener();
  }

  private addListener(): void {
    const main_ = this.main;
    const mainDiv = document.getElementById('diagramContainer');
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
        main_.move_div = this;
        main_.mouse_start_x = e.clientX;
        main_.mouse_start_y = e.clientY;
        // mouse move
        mainDiv.addEventListener('mousemove', main_.moveItem);
        // mouse up
        document.addEventListener('mouseup', function () {
          mainDiv.removeEventListener('mousemove', main_.moveItem);
        });
      });
    }
    // mouse out
    // mainDiv.addEventListener('mouseout', function () {
    //   mainDiv.removeEventListener('mousemove', main.moveItem);
    // });
  }

  private moveItem = (even): void => {
    const start_position_x = parseInt(this.move_div.style.left.slice(0, this.move_div.style.left.length - 2), null);
    const start_position_y = parseInt(this.move_div.style.top.slice(0, this.move_div.style.top.length - 2), null);
    let new_position_x = start_position_x;
    let new_position_y = start_position_y;
    // set new x item
    if (even.clientX > this.mouse_start_x) {
      new_position_x = start_position_x + (even.clientX - this.mouse_start_x);
    }
    if (even.clientX < this.mouse_start_x) {
      new_position_x = start_position_x - (this.mouse_start_x - even.clientX);
    }
    // set new y item
    if (even.clientY > this.mouse_start_y) {
      new_position_y = start_position_y + (even.clientY - this.mouse_start_y);
    }
    if (even.clientY < this.mouse_start_y) {
      new_position_y = start_position_y - (this.mouse_start_y - even.clientY);
    }
    // set position item
    this.mouse_start_x = even.clientX;
    this.mouse_start_y = even.clientY;
    this.move_div.style.left = new_position_x + 'px';
    this.move_div.style.top = new_position_y + 'px';
    // repaint plumb
    this.main.jsPlumbInstance.repaintEverything();
  }

  // add item
  private addSelectItems() {
    const all_items_for_select = document.getElementById('diagramSelect').
    querySelectorAll('div');
    //
    for (let i = 0; i < all_items_for_select.length; i++) {
      const div = all_items_for_select.item(i);
      // mouse down
      div.addEventListener('mousedown', function (even) {
        const newItem = document.createElement('div');
        switch (this.getAttribute('name')) {
          case 'item_select_ball':
            newItem.setAttribute('class', 'item ball');
            break;
          case 'item_select_square':
            newItem.setAttribute('class', 'item');
            break;
          case 'item_select_diamond':
            newItem.setAttribute('class', 'item diamond');
            break;
          default:
            return;
        }
        //
        newItem.style.position = 'absolute';
        newItem.style.left = even.clientX - 40 + 'px';
        newItem.style.top = even.clientY - 40 + 'px';
        newItem.id = 'new_item';
        //
        document.body.appendChild(newItem);
        // mouse move
        window.addEventListener('mousemove', function(e) {
          newItem.style.left = e.clientX - 40 + 'px';
          newItem.style.top = e.clientY - 40 + 'px';
        });
        // mouse up
        window.addEventListener('mouseup', function () {
          document.body.removeChild(newItem);
        }, true);
      });
    }
  }
  //
}
