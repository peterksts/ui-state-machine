import {FlowEditor} from './flow-editor.model';

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
    //
    for (let i = 0; i < allTask.length; i++) {
      const task = allTask.item(i);
      //
      task.addEventListener('mousedown', function (e) {
        const newTask = document.createElement('div');
        newTask.className = this.className;
        newTask.innerHTML = this.innerHTML;
        newTask.style.position = 'absolute';
        newTask.style.left = e.clientX + 'px';
        newTask.style.top = e.clientY + 'px';
        document.body.appendChild(newTask);

        window.addEventListener('mousemove', function(even) {
          newTask.style.left = even.clientX + 'px';
          newTask.style.top = even.clientY + 'px';
        });

        const windowMouseUp = (even): void => {
          document.body.removeChild(newTask);
          const rect = document.getElementById(flowEditor.getContainerId()).getBoundingClientRect();
          if (rect.top < even.clientY && rect.bottom > even.clientY && rect.left < even.clientX && rect.right > even.clientX) {
            flowEditor.createNewTask({
                left: (even.clientX - rect.left) + 'px',
                top: (even.clientY - rect.top) + 'px',
            });
          }

          window.removeEventListener('mouseup', windowMouseUp);
        };

        window.addEventListener('mouseup', windowMouseUp);
      });
    }
  }
}
