import { StatusLoad } from './status-load.model';

class Task {

  public template: ITaskTemplate;
  public id: String;
  public data: any;
  public statusLoad: StatusLoad;

  public get title(): string {
    return this.template ? this.template.name : null;
  }

  constructor() {
  }
}

interface ITaskTemplate {
  _id: string;
  nameTemplate: string;
  __v: number;
  version: number;
  category: string;
  id: number;
  name: string;
  consumes: any[];
  produces: any[];
  properties: any;
  parameters: any;
  completion: any;
  execution: any;
  review: any;
  columns: any;
}

export { Task, ITaskTemplate };
