import { FlowEditor } from './flow-editor.model';
import { Tasks } from '../services/tasks.const';

export class SelectTask {
  private flowEditor: FlowEditor;
  private selectTaskId: string;
  private panelTask: HTMLElement;

  constructor(flowEditor: FlowEditor, selectTaskId: string) {
    this.flowEditor = flowEditor;
    this.selectTaskId = selectTaskId;
    setTimeout(() => {
      this.panelTask = document.getElementById(selectTaskId);
      // add event listener
      this.addEventListenerToPanelTask();
    }, 200);
  }

  addEventListenerToPanelTask(): void {
    const allTask = this.panelTask.querySelectorAll('div');
    const flowEditor = this.flowEditor;
    const getCenterElement = this.getCenterElement;

    for (let i = 0; i < allTask.length; i++) {
      const task = allTask.item(i);

      task.addEventListener('mousedown', function (e): void {
        const newTask = document.createElement('div');
        newTask.className = this.className;
        newTask.innerHTML = this.innerHTML;
        newTask.style.position = 'absolute';
        document.body.appendChild(newTask);

        let centerElementNewTask = getCenterElement(newTask);
        newTask.style.left = (e.clientX - centerElementNewTask.x) + 'px';
        newTask.style.top = (e.clientY - centerElementNewTask.y) + 'px';

        window.addEventListener('mousemove', (even): void => {
          newTask.style.left = (even.clientX - centerElementNewTask.x) + 'px';
          newTask.style.top = (even.clientY - centerElementNewTask.y) + 'px';
        });

        const configs = Tasks;
        let config: any = {};
        configs.forEach((conf) => {
          if (conf.title !== newTask.innerText) { return; }

          config = conf;
        });

        const windowMouseUp = (even): void => {
          document.body.removeChild(newTask);

          const rect = document.getElementById(flowEditor.getContainerId()).getBoundingClientRect();
          if (rect.top < even.clientY && rect.bottom > even.clientY && rect.left < even.clientX && rect.right > even.clientX) {
            const idElementNewTask = flowEditor.createNewTask(config);
            const newElementInFlowEditor = document.getElementById(idElementNewTask);

            centerElementNewTask = getCenterElement(newElementInFlowEditor);
            newElementInFlowEditor.style.left = even.clientX - rect.left - centerElementNewTask.x + 'px';
            newElementInFlowEditor.style.top = even.clientY - rect.top - centerElementNewTask.y + 'px';
            flowEditor.repaintAllEndpoint();
          }

          window.removeEventListener('mouseup', windowMouseUp);
        };

        window.addEventListener('mouseup', windowMouseUp);
      });
    }
  }

  getCenterElement(element: HTMLElement): {x: number, y: number} {
    const rect = element.getBoundingClientRect();
    const x = (rect.right - rect.left) / 2;
    const y = (rect.bottom - rect.top) / 2;

    return {x: x, y: y};
  }
}
