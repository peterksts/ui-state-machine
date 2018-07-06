import { Directive, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import { GetCenterElement } from '../services/tools.service';
import { Store } from '../models/store.model';
import {EndpointOptions, jsPlumb, jsPlumbInstance} from 'jsplumb';

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

  private jsPlumbInstance: jsPlumbInstance;
  private mousePosition: {x: number, y: number} = {x: 0, y: 0};

  constructor(private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.jsPlumbInstance = jsPlumb.getInstance();
    this.jsPlumbInstance.setContainer(this.el.nativeElement.id);
  }

  private eventListenerAddNewUbixTask = (): void => {
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.createNewTask(this.store.data, {x: this.mousePosition.x - rect.left, y: this.mousePosition.y - rect.top, type: 'mouse'});

    this.store.setStore({type: '', data: null, event: null});
  }

  @HostListener('dragenter')
  onDragEnter() {
    if (!this.store || this.store.type !== 'new_ubix_task' || !this.store.event || !this.store.data) { return; }

    this.store.event.target.addEventListener('dragend', this.eventListenerAddNewUbixTask);
  }

  @HostListener('dragleave')
  onDragLeave() {
    if (!this.store || this.store.type !== 'new_ubix_task' || !this.store.event || !this.store.data) { return; }

    setTimeout(() => {
      if (!this.store.event) { return; }
      this.store.event.target.removeEventListener('dragend', this.eventListenerAddNewUbixTask);
    }, 50);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    this.mousePosition = {x: event.pageX, y: event.pageY};
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
      if (pos.type && pos.type === 'mouse') {
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
