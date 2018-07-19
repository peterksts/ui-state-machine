import { jsPlumbInstance } from '../../../ubix_module/jsplumb';
import { Store } from './store.model';
import {AddEndpointInputPorts, AddEndpointOutputPorts, GetCenterElement, ParseStylePxToNumber} from '../services/tools.service';
import {PortOptions} from './port-options.model';

export type CreateTaskListener = (newTask: HTMLElement, positionX: number, positionY: number, config: any, swimlaneName: string) => void;
export type MoveTaskListener = (positionX: number, positionY: number, taskId: string, swimlaneName: string) => void;

export class Swimlane {

  private container: HTMLElement;
  private headSwimlane: HTMLElement;
  private nameSwimlane: string;
  private moveTaskListener: MoveTaskListener;
  private createTaskListener: CreateTaskListener;
  private jsPlumbInstance: jsPlumbInstance;
  private store: Store;
  private useSwimLane = true;
  private nameTask: string;
  private flowEditorId: string;
  private backgroundColor: string;
  private borderColor: string;

  constructor(swimlaneId: string,
              nameSwimlane: string,
              moveTaskListener: MoveTaskListener,
              createTaskListener: CreateTaskListener,
              jsPlumb: jsPlumbInstance,
              store: Store,
              nameTask: string,
              flowEditorId: string
  ) {
    this.container = document.getElementById(swimlaneId);
    if (!this.container) { console.error('Not found swimlane id: ' + swimlaneId); }
    this.nameSwimlane = nameSwimlane;
    this.moveTaskListener = moveTaskListener;
    this.createTaskListener = createTaskListener;
    this.jsPlumbInstance = jsPlumb;
    this.store = store;
    this.nameTask = nameTask;
    this.flowEditorId = flowEditorId;
    this.backgroundColor = this.container.style.backgroundColor;
    this.borderColor = this.container.style.borderColor;
    //
    this.setNameSwimlane();
  }

  private setNameSwimlane() {
    const headSwimlaneEl = document.createElement('div');
    headSwimlaneEl.setAttribute('class', 'name-swimlane');
    //
    const textSwimlaneEl = document.createElement('p');
    textSwimlaneEl.setAttribute('onselectstart', 'return false');
    textSwimlaneEl.setAttribute('onmousedown', 'return false');
    textSwimlaneEl.setAttribute('name', 'text-swimlane');
    textSwimlaneEl.innerText = this.nameSwimlane;
    headSwimlaneEl.appendChild(textSwimlaneEl);
    this.container.appendChild(headSwimlaneEl);
    this.headSwimlane = headSwimlaneEl;
    // DRAG AND DROP init
    this.container.addEventListener('dragover', this.onDragOver);
    this.container.addEventListener('dragleave', this.onDragLeave);
    this.container.addEventListener('drop', this.onDrop);
  }

  // VISIBLE
  public visibleOff() {
    // visible
    this.headSwimlane.style.visibility = 'hidden';
    this.container.style.overflow = 'visible';
    this.container.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    this.container.style.borderColor = 'rgba(0, 0, 0, 0)';
    this.useSwimLane = false;
  }

  public visibleOn() {
    this.headSwimlane.style.visibility = 'visible';
    this.container.style.overflow = 'hidden';
    this.container.style.backgroundColor = this.backgroundColor;
    this.container.style.borderColor = this.borderColor;
    this.useSwimLane = true;
    // TODO: code
  }

  // DRAG AND DROP
  private onDragOver = (event): void => {
    if (!this.store || this.store.type !== 'new_ubix_task' || this.store.data.category !== this.nameSwimlane) { return; }

    event.preventDefault();
    this.container.style.borderColor = 'rgba(255, 0, 0, 0.4)';
  }

  private onDragLeave = (event): void => {
    if (!this.store || this.store.type !== 'new_ubix_task' || this.store.data.category !== this.nameSwimlane) { return; }

    this.container.style.borderColor = this.borderColor;
  }

  private onDrop = (event): void => {
    if (!this.store || this.store.type !== 'new_ubix_task' || this.store.data.category !== this.nameSwimlane) { return; }

    const position = this.getPositionMouse(event);

    event.preventDefault();
    this.createNewTask(this.store.data, {x: position.x, y: position.y, type: 'mouse'});
    this.store.setStore({type: '', data: null, event: null});
    this.container.style.borderColor = this.borderColor;
  }

  // CREATE TASK
  // createNewTask and return id element new task
  private createNewTask(config: any = {}, pos?: any): string {
    // create task body
    const newTaskId = 'task-' + new Date().getTime();
    const newTask = document.createElement('div');
    newTask.classList.add('flow-editor-task');
    newTask.id = newTaskId;
    newTask.innerText = config.name || 'task';
    newTask.setAttribute('onselectstart', 'return false');
    newTask.setAttribute('onmousedown', 'return false');
    newTask.setAttribute('name', this.nameTask);
    // newTask.setAttribute('taskTemplate', JSON.stringify(taskTemplate));
    this.container.appendChild(newTask);
    // set position
    if (pos && pos.x && pos.y) {
      if (pos.type === 'mouse') {
        const centerEl = GetCenterElement(newTask);
        pos.x -= centerEl.x;
        pos.y -= centerEl.y;
      }
    } else {
      pos.x = 10;
      pos.y = 10;
    }
    newTask.style.left = pos.x + 'px';
    newTask.style.top = pos.y + 'px';
    // create task ports
    const portOptions = {
      anchor: [],
      maxConnections: 1,
      parameters: {},
      id: '',
      scope: '1.0',
      reattachConnections: true,
      type: 'Dot',
      cssClass: 'endpoint',
      isSource: true,
      isTarget: true,
      connector: 'Bezier',
    };
    const countInput = config.consumes.length || 0;
    const countOutput = config.produces.length || 0;
    AddEndpointInputPorts(newTaskId, PortOptions, countInput, this.jsPlumbInstance, newTaskId, '');
    AddEndpointOutputPorts(newTaskId, PortOptions, countOutput, this.jsPlumbInstance, newTaskId, '');

    this.jsPlumbInstance.repaintEverything();

    if (this.createTaskListener) {
      const rect = newTask.getBoundingClientRect();
      this.createTaskListener(newTask, pos.x, pos.y, config, this.nameSwimlane);
    }

    this.addMoveTask(newTask);

    // add task to mini-map
    // TODO: mini-map
    // this.miniMap.addTask(newTask, pos.x / (this.el.nativeElement.scrollWidth / 100),
    //   pos.y / (this.el.nativeElement.scrollHeight / 100),
    //   this.container.scrollWidth,
    //   this.container.scrollHeight,
    //   taskTemplate);

    return newTaskId;
  }

  private addMoveTask(element: HTMLElement): void {
    element.addEventListener('mousedown', (e) => {
      let mouseStartX = e.clientX;
      let mouseStartY = e.clientY;

      const moveTask = (event): void => {
        const startPositionX = parseInt(element.style.left.slice(0, element.style.left.length - 2), null);
        const startPositionY = parseInt(element.style.top.slice(0, element.style.top.length - 2), null);
        let newPositionX = startPositionX;
        let newPositionY = startPositionY;
        // set new X position
        if (event.clientX > mouseStartX) {
          newPositionX = startPositionX + (event.clientX - mouseStartX);
        }
        if (event.clientX < mouseStartX) {
          newPositionX = startPositionX - (mouseStartX - event.clientX);
        }
        // set new Y position
        if (event.clientY > mouseStartY) {
          newPositionY = startPositionY + (event.clientY - mouseStartY);
        }
        if (event.clientY < mouseStartY) {
          newPositionY = startPositionY - (mouseStartY - event.clientY);
        }
        // position
        if (this.useSwimLane) {
          const rectTask = element.getBoundingClientRect();
          if (newPositionX >= 0 &&
            (newPositionX + (rectTask.right - rectTask.left)) <= this.getWidthContainer() ) {
            // element.style.left = newPositionX + 'px';
          } else {
            newPositionX = startPositionX;
          }
          if (newPositionY >= 0 &&
            (newPositionY + (rectTask.bottom - rectTask.top)) <= this.getHeightContainer()) {
            // element.style.top = newPositionY + 'px';
          } else {
            newPositionY = startPositionY;
          }
        }
        // set position
        element.style.left = newPositionX + 'px';
        element.style.top = newPositionY + 'px';
        mouseStartX = event.clientX;
        mouseStartY = event.clientY;
        this.jsPlumbInstance.repaintEverything();
        //
        if (this.moveTaskListener) {
          this.moveTaskListener(newPositionX, newPositionY, element.id, this.nameSwimlane);
        }
      };

      // mouse move
      document.getElementById(this.flowEditorId).addEventListener('mousemove', moveTask);
      // mouse up
      document.getElementById(this.flowEditorId).addEventListener('mouseup', () => {
        document.getElementById(this.flowEditorId).removeEventListener('mousemove', moveTask);
      });
    });
  }

  // TOOLS
  private getPositionMouse(event): {x: number, y: number} {
    const posMouseX = event.offsetX === undefined ? event.layerX : event.offsetX;
    const posMouseY = event.offsetY === undefined ? event.layerY : event.offsetY;
    const posScrollLeft = event.target.scrollLeft;
    const posScrollTop = event.target.scrollTop;
    return {x: posMouseX + posScrollLeft, y: posMouseY + posScrollTop};
  }

  private getHeightContainer(): number {
    const height = parseInt(this.container.style.height.slice(0, this.container.style.height.length - 2), null);
    return height;
  }

  private getWidthContainer(): number {
    const width = parseInt(this.container.style.width.slice(0, this.container.style.width.length - 2), null);
    return width;
  }

  public getTopPosition(): number {
    const rectTask = this.container.getBoundingClientRect();
    const positionScrollTop = document.getElementById(this.flowEditorId).scrollTop;
    return rectTask.top + positionScrollTop;
  }

  public deleteChild(element: HTMLElement) {
    this.container.removeChild(element);
  }
}
