import { StatusLoad } from './status-load.model';

class Task {
  [propName: string]: any;

  public get title(): string {
    return this.template ? this.template.name : null;
  }

  public get schema(): any {
    return this.template ? this.template.parameters.jsonSchema : null;
  }

  constructor(public template: ITaskTemplate,
              public id: String,
              public data: any,
              public statusLoad: StatusLoad) {
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
