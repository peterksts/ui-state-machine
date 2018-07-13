// isCreatingNew: boolean;    \   имеет мысл заменить на
// isPanning: boolean;		    | 	editorMode: EditorMode
// isMoving: boolean;		    /
// newObject: BaseObject;
// newLink: Link;
// selectedObjects:
//   Objects: BaseObject[],
//   Links: Links[],
//   mouseDown: Event;
// mouseMove: Event;
// mouseUp: Event;

import {EndpointOptions, jsPlumb, jsPlumbInstance} from 'jsplumb';

enum EditorMode {
  Creating,
  Panning,
  Zooming
}

export class FlowEditor {

  private containerId: string;
  private container: HTMLElement;
  private jsPlumbInstance: jsPlumbInstance;
  private editorMode;

  constructor(elemId: string) {
    this.containerId = elemId;
    this.container = document.getElementById(this.containerId); //
    this.jsPlumbInstance = jsPlumb.getInstance();
    this.jsPlumbInstance.setContainer(this.containerId);
    // this.addSelectItems();
    // this.addListener();
  }

  // createNewTask and return id element new task
  public createNewTask(config: any, pos?: any): string {
    // create task body
    const newTaskId = 'task-' + new Date().getTime();
    const newTask = document.createElement('div');
    newTask.classList.add('flow-editor-task');
    newTask.id = newTaskId;
    newTask.style.left = pos ? pos.x ? pos.x : '10px' : '10px';
    newTask.style.top = pos ? pos.y ? pos.y : '10px' : '10px';
    newTask.innerText = config ? config.title ? config.title : '' : '';
    this.container.appendChild(newTask);
    // create task ports
    const newPortId = newTaskId + '-' + 'port-' + new Date().getTime();
    const portOptions = {
      anchor: [0, 0.7],
      maxConnections: 1,
      parameters: {},
      id: newPortId,
      scope: '1.0',
      reattachConnections: true,
      type: 'Dot',
      isSource: false,
      isTarget: true,
      connector: 'Bezier',
    };
    const countInput = config ? config.inputPorts ? config.inputPorts.length : 0 : 0;;
    const countOutput = config ? config.outputPorts ? config.outputPorts.length : 0 : 0;
    this.addEndpointInputPorts(newTaskId, portOptions, countInput);
    portOptions.isSource = true;
    portOptions.isTarget = false;
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

  public showAvailablePorts() {
    //
  }

  public getContainerId(): string {
    return this.containerId;
  }

  public repaintAllEndpoint(): void {
    this.jsPlumbInstance.repaintEverything();
  }
}


// const div = this.renderer2.createElement('div');
// this.renderer2.addClass(div, 'card');
// this.renderer2.appendChild(parentElement, div);
// const link = this.renderer2.createElement('a');
// this.renderer2.addClass(link, 'menu-item-link');
// if (menu0) {
//   this.renderer2.setAttribute(link, 'data-toggle', 'tooltip');
//   this.renderer2.setAttribute(link, 'data-placement', 'top');
//   this.renderer2.setAttribute(link, 'data-animation', 'false');
//   this.renderer2.setAttribute(link, 'data-container', '.vertical-menu-tooltip-place');
//   this.renderer2.setAttribute(link, 'data-original-title', menuItem.title);
// }
// const icon = this.renderer2.createElement('i');
// this.renderer2.addClass(icon, 'icon');
// this.renderer2.addClass(icon, 'icon-' + menuItem.icon);
// this.renderer2.appendChild(link, icon);
// const span = this.renderer2.createElement('span');
// this.renderer2.addClass(span, 'menu-title');
// this.renderer2.appendChild(link, span);
// const menuText = this.renderer2.createText(menuItem.title);
// this.renderer2.appendChild(span, menuText);
// this.renderer2.setAttribute(link, 'id', 'link' + menuItem.id);
// this.renderer2.addClass(link, 'transition');
// this.renderer2.appendChild(div, link);
// if (menuItem.routerLink) {
//   this.renderer2.setAttribute(link, 'href', '#' + menuItem.routerLink);
//   this.renderer2.setAttribute(link, 'target', '_blank');
//
//   this.renderer2.listen(link, 'click', (event) => {
//     if (!event.metaKey && !event.ctrlKey) {
//       this.setActiveLink(menu, link);
//       this.router.navigate([menuItem.routerLink]);
//       this.closeOtherSubMenus(div);
//       if (parentElement.classList.contains('collapse')) {
//         setTimeout(() => {
//           this.renderer2.setStyle(parentElement, 'display', 'none');
//         }, 300);
//         setTimeout(() => {
//           this.renderer2.removeStyle(parentElement, 'display');
//         }, 500);
//       }
//       event.preventDefault();
//       return false;
//     }
//   });
