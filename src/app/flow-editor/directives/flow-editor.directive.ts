import { Directive, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import { GetCenterElement } from '../services/tools.service';
import { Store } from '../models/store.model';
import { EndpointOptions, jsPlumb, jsPlumbInstance } from 'jsplumb';
import { Minimap } from '../models/minimap.model';

enum EditorMode {
  Creating,
  Panning,
  Zooming
}

@Directive({
  selector: '[app-flow-editor-directive]'
})
export class FlowEditorDirective implements OnInit {

  @Input() store: Store;
  @Input() miniMap: Minimap;

  private jsPlumbInstance: jsPlumbInstance;

  constructor(private el: ElementRef
  ) { }

  ngOnInit(): void {
    // jsPlumb init
    this.jsPlumbInstance = jsPlumb.getInstance();
    this.jsPlumbInstance.setContainer(this.el.nativeElement.id);
  }

  // DRAG AND DROP
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    if (!this.store || this.store.type !== 'new_ubix_task') { return; }

    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    if (!this.store || this.store.type !== 'new_ubix_task') { return; }

    const position = this.getPositionMouse(event);

    event.preventDefault();
    this.createNewTask(this.store.data, {x: position.x, y: position.y, type: 'mouse'});
    this.store.setStore({type: '', data: null, event: null});
  }

  // SCROLLING
  @HostListener('scroll', ['$event'])
  onScroll(event) {
    this.miniMap.shift(event.target.scrollLeft, event.target.scrollTop);
  }

  // TOOLS
  getPositionMouse(event): {x: number, y: number} {
    const posMouseX = event.offsetX === undefined ? event.layerX : event.offsetX;
    const posMouseY = event.offsetY === undefined ? event.layerY : event.offsetY;
    const posScrollLeft = event.target.scrollLeft;
    const posScrollTop = event.target.scrollTop;
    return {x: posMouseX + posScrollLeft, y: posMouseY + posScrollTop};
  }

  // CREATE TASK
  // createNewTask and return id element new task
  private createNewTask(config: any, pos?: any): string {
    // create task body
    const newTaskId = 'task-' + new Date().getTime();
    const newTask = document.createElement('div');
    newTask.classList.add('flow-editor-task');
    newTask.id = newTaskId;
    newTask.innerText = config ? config.title ? config.title : '' : '';
    this.el.nativeElement.appendChild(newTask);
    // set position
    if (pos && pos.x && pos.y) {
      if (pos.type === 'mouse') {
        const centerEl = GetCenterElement(newTask);
        pos.x -= centerEl.x;
        pos.y -= centerEl.y;
      }
      newTask.style.left = pos.x + 'px';
      newTask.style.top = pos.y + 'px';
    } else {
      newTask.style.left = '10px';
      newTask.style.top = '10px';
    }
    // create task ports
    const portOptions = {
      anchor: [],
      maxConnections: 1,
      parameters: {},
      id: '',
      scope: '1.0',
      reattachConnections: true,
      type: 'Dot',
      isSource: true,
      isTarget: true,
      connector: 'Bezier',
    };
    const countInput = config ? config.inputPorts ? config.inputPorts.length : 0 : 0;
    const countOutput = config ? config.outputPorts ? config.outputPorts.length : 0 : 0;
    this.addEndpointInputPorts(newTaskId, portOptions, countInput);
    this.addEndpointOutputPorts(newTaskId, portOptions, countOutput);

    this.jsPlumbInstance.repaintEverything();

    return newTaskId;
  }

  private addEndpointInputPorts(taskId: string, portOptions: EndpointOptions, count: number): void {
    if (count === 0) { return; }

    let anchors = [[0.5, 0]];
    if (count > 1) {
      anchors = [];
      count += 1;
      let coordination = 1 / count;
      const coordinationIterator = coordination;

      for (let i = 2; i <= count; i++) {
        anchors.push([coordination, 0]);
        coordination += coordinationIterator;
      }
    }

    anchors.forEach((anchor, index) => {
      portOptions.anchor = anchor;
      portOptions.id = taskId + '-' + 'port-' + index + '_in_' + new Date().getTime();
      this.jsPlumbInstance.addEndpoint(taskId, portOptions);
    });
  }

  private addEndpointOutputPorts(taskId: string, portOptions: EndpointOptions, count: number): void {
    if (count === 0) { return; }

    let anchors = [[0.5, 1]];
    if (count > 1) {
      anchors = [];
      count += 1;
      let coordination = 1 / count;
      const coordinationIterator = coordination;

      for (let i = 2; i <= count; i++) {
        anchors.push([coordination, 1]);
        coordination += coordinationIterator;
      }
    }

    anchors.forEach((anchor, index) => {
      portOptions.anchor = anchor;
      portOptions.id = taskId + '-' + 'port-' + index + '_out_' + new Date().getTime();
      this.jsPlumbInstance.addEndpoint(taskId, portOptions);
    });
  }
}
