import {Connection, Endpoint, jsPlumb, jsPlumbInstance} from 'jsplumb';

import { AddEndpointInputPorts, AddEndpointOutputPorts } from '../services/tools.service';

interface IPercentPosition {
  percentX: number;
  percentY: number;
}

export class Minimap {

  private container: HTMLElement;
  private miniMapView: HTMLElement;
  private jsPlumbInstance: jsPlumbInstance;
  private mapPorts: {[key: string]: Endpoint} = {};
  private mapConnects: {[key: string]: Connection} = {}; // key = sourceEndpointId  + '_and_' +  targetEndpointId
  private positionMiniMap: {x: number, y: number} = {x: 20, y: 20};
  private positionMiniMapViewListener: (percentPosition: IPercentPosition) => void;
  private suffixForIdTask = '_mini-map-task';

  constructor(minimapId: string, minimapViewId: string) {
    this.container = document.getElementById(minimapId);
    this.miniMapView = document.getElementById(minimapViewId);

    // jsPlumb init
    this.jsPlumbInstance = jsPlumb.getInstance();
    this.jsPlumbInstance.setContainer(this.container.id);

    // get position mini-map
    if (this.container.style.right && this.container.style.top) {
      const x = parseInt(this.container.style.right.slice(0, this.container.style.right.length - 2), null);
      const y = parseInt(this.container.style.top.slice(0, this.container.style.top.length - 2), null);
      this.positionMiniMap = {x: x, y: y};
    }

    // add move mini-map view
    this.miniMapViewControl(this.miniMapView);
  }

  // MINI-MAP VIEW
  public setEventListenerMiniMapView(listener: (percentPosition: IPercentPosition) => void): void {
    this.positionMiniMapViewListener = listener;
  }

  private miniMapViewControl(miniMapView: HTMLElement): void {
    miniMapView.addEventListener('mousedown', (e) => {
      let mouseStartX = e.clientX;
      let mouseStartY = e.clientY;

      const moveMiniMapView = (even): void => {
        const rectMiniMapView = miniMapView.getBoundingClientRect();
        const rectMiniMap = this.container.getBoundingClientRect();

        const startPositionX = parseInt(miniMapView.style.left.slice(0, miniMapView.style.left.length - 2), null);
        const startPositionY = parseInt(miniMapView.style.top.slice(0, miniMapView.style.top.length - 2), null);
        let newPositionX = startPositionX;
        let newPositionY = startPositionY;
        // set new X position mini-map view
        if (even.clientX > mouseStartX) {
          newPositionX = startPositionX + (even.clientX - mouseStartX);
        }
        if (even.clientX < mouseStartX) {
          newPositionX = startPositionX - (mouseStartX - even.clientX);
        }
        // set new Y position mini-map view
        if (even.clientY > mouseStartY) {
          newPositionY = startPositionY + (even.clientY - mouseStartY);
        }
        if (even.clientY < mouseStartY) {
          newPositionY = startPositionY - (mouseStartY - even.clientY);
        }
        // set position mini-map view
        mouseStartX = even.clientX;
        mouseStartY = even.clientY;
        if (rectMiniMapView.left + newPositionX >= rectMiniMap.left &&
           (newPositionX + (rectMiniMapView.right - rectMiniMapView.left)) + rectMiniMap.left <= rectMiniMap.right ) {
          miniMapView.style.left = newPositionX + 'px';
        } else {
          newPositionX = startPositionX;
        }
        if (rectMiniMapView.top + newPositionY >= rectMiniMap.top &&
           (newPositionY + (rectMiniMapView.bottom - rectMiniMapView.top)) + rectMiniMap.top <= rectMiniMap.bottom) {
          miniMapView.style.top = newPositionY + 'px';
        } else {
          newPositionY = startPositionY;
        }
        // set position scroll flow-editor-map
        if (this.positionMiniMapViewListener) {
          this.positionMiniMapViewListener({percentX: newPositionX / ((rectMiniMap.right - rectMiniMap.left) / 100),
            percentY: newPositionY / ((rectMiniMap.bottom - rectMiniMap.top) / 100)});
        }
      };

      // mouse move
      window.addEventListener('mousemove', moveMiniMapView);
      // mouse up
      window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', moveMiniMapView);
      });
    });
  }

  public setSizeMiniMapView(sizeFlowEditorWindowWidth: number,
                            sizeFlowEditorWindowHeight: number,
                            sizeFlowEditorScrollWidth: number,
                            sizeFlowEditorScrollHeight: number): void {
    // get percent
    const sizePercentWidthMiniMapView = sizeFlowEditorWindowWidth / (sizeFlowEditorScrollWidth / 100);
    const sizePercentHeightMiniMapView = sizeFlowEditorWindowHeight / (sizeFlowEditorScrollHeight / 100);
    // set size
    const rectMiniMap = this.container.getBoundingClientRect();
    this.miniMapView.style.width = ((rectMiniMap.right - rectMiniMap.left) / 100 * sizePercentWidthMiniMapView) + 'px';
    this.miniMapView.style.height = ((rectMiniMap.bottom - rectMiniMap.top) / 100 * sizePercentHeightMiniMapView) + 'px';
  }

  // MINI-MAP
  // shift mini-map and mini-map view
  public shift(x: number, y: number, sizeFlowEditorScrollWidth: number, sizeFlowEditorScrollHeight: number): void {
    // set position mini-map
    this.container.style.right = (this.positionMiniMap.x - x) + 'px';
    this.container.style.top = (this.positionMiniMap.y + y) + 'px';
    // set position mini-map view
    // get percent position
    const positionPercentX = x / (sizeFlowEditorScrollWidth / 100);
    const positionPercentY = y / (sizeFlowEditorScrollHeight / 100);
    // set position
    const rectMiniMap = this.container.getBoundingClientRect();
    this.miniMapView.style.left = ((rectMiniMap.right - rectMiniMap.left) / 100 * positionPercentX) + 'px';
    this.miniMapView.style.top = ((rectMiniMap.bottom - rectMiniMap.top) / 100 * positionPercentY) + 'px';
  }

  // TASK
  public addTask(taskEl: HTMLElement,
                 positionPercentX: number,
                 positionPercentY: number,
                 sizeFlowEditorScrollWidth: number,
                 sizeFlowEditorScrollHeight: number,
                 config: any): void {
    const rectMiniMap = this.container.getBoundingClientRect();
    const newTaskEl = document.createElement('div');

    newTaskEl.setAttribute('class', taskEl.getAttribute('class'));
    newTaskEl.id = taskEl.id + this.suffixForIdTask;
    newTaskEl.style.borderWidth = '1px';
    newTaskEl.style.width = taskEl.style.width;
    newTaskEl.style.height = taskEl.style.height;
    // append
    this.container.appendChild(newTaskEl);
    // get size
    const rectnewTaskEl = newTaskEl.getBoundingClientRect();
    const sizeWidth = rectnewTaskEl.right - rectnewTaskEl.left;
    const sizeHeight = rectnewTaskEl.bottom - rectnewTaskEl.top;
    const sizePercentWidth = sizeWidth / (sizeFlowEditorScrollWidth / 100);
    const sizePercentHeight = sizeHeight / (sizeFlowEditorScrollHeight / 100);
    // set size
    newTaskEl.style.width = ((rectMiniMap.right - rectMiniMap.left) / 100 * sizePercentWidth) + 'px';
    newTaskEl.style.height = ((rectMiniMap.bottom - rectMiniMap.top) / 100 * sizePercentHeight) + 'px';
    // set position
    newTaskEl.style.left = ((rectMiniMap.right - rectMiniMap.left) / 100 * positionPercentX) + 'px';
    newTaskEl.style.top = ((rectMiniMap.bottom - rectMiniMap.top) / 100 * positionPercentY) + 'px';
    // add endpoint
    const portOptions = {
      anchor: [],
      maxConnections: 1,
      parameters: {},
      id: '',
      scope: '1.0',
      cssClass: 'minimap-endpoint',
      reattachConnections: true,
      type: 'Dot',
      isSource: false,
      isTarget: false,
      connector: 'Straight',
    };
    const countInput = config ? config.inputPorts ? config.inputPorts.length : 0 : 0;
    const countOutput = config ? config.outputPorts ? config.outputPorts.length : 0 : 0;
    const inputPorts = AddEndpointInputPorts(newTaskEl.id, portOptions, countInput, this.jsPlumbInstance, taskEl.id, '');
    const outputPorts = AddEndpointOutputPorts(newTaskEl.id, portOptions, countOutput, this.jsPlumbInstance, taskEl.id, '');
    // set map ports
    if (inputPorts) {
      inputPorts.forEach((port) => { this.mapPorts[port.Endpoint.id] = port.Endpoint; });
    }
    if (outputPorts) {
      outputPorts.forEach((port) => { this.mapPorts[port.Endpoint.id] = port.Endpoint; });
    }
  }

  // move task
  public setPositionTaskInPercent(taskId: string, positionPercentX: number, positionPercentY: number): void {
    const miniMapTaskId = taskId + this.suffixForIdTask;
    const rectMiniMap = this.container.getBoundingClientRect();

    document.getElementById(miniMapTaskId).style.left = ((rectMiniMap.right - rectMiniMap.left) / 100 * positionPercentX) + 'px';
    document.getElementById(miniMapTaskId).style.top = ((rectMiniMap.bottom - rectMiniMap.top) / 100 * positionPercentY) + 'px';
    this.jsPlumbInstance.repaintEverything();
  }

  // CONNECT CONTROL
  public addConnect(sourceEndpointId: string, targetEndpointId: string): void {
    const newConnect = this.jsPlumbInstance.connect({
      source: this.mapPorts[sourceEndpointId],
      target: this.mapPorts[targetEndpointId],
    });
    this.mapConnects[sourceEndpointId + '_and_' + targetEndpointId] = newConnect;
  }

  public deleteConnect(sourceEndpointId: string, targetEndpointId: string): void {
    const connectId = sourceEndpointId + '_and_' + targetEndpointId;
    this.jsPlumbInstance.deleteConnection(this.mapConnects[connectId]);
    this.mapConnects[connectId] = null;
  }
}
