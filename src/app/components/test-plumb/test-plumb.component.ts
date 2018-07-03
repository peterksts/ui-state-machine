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
    //
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
  }
}
