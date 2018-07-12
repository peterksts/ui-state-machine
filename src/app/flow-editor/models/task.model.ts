import {DataType} from './data-type.model';

export class Task {
  public swimlane: string;
  public id: number;
  public title: string;
  public inputPorts: any[];
  public outputPorts: any[];

  constructor() {
  }
}
