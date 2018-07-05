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

import {jsPlumb, jsPlumbInstance} from 'jsplumb';

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

  public createNewTask(config: any) {
    // create task body
    const newTaskId = 'task-' + new Date().getTime();
    const newTask = document.createElement('div');
    newTask.classList.add('task3');
    this.container.appendChild(newTask);
    //debugger;
    return;
    // create task ports
    const newPortId = 'port-' + new Date().getTime();
    const portOptions = {
      anchor: [0, 0.7],
      maxConnections: 1,
      parameters: {},
      id: newPortId,
      scope: '1.0',
      reattachConnections: true,
      type: 'Dot',
      isSource: true,
      isTarget: true,
      connector: 'Bezier',
    };
    this.jsPlumbInstance.addEndpoint(newTaskId, portOptions);

    this.jsPlumbInstance.repaintEverything();
  }

  public showAvailablePorts() {
    //
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
