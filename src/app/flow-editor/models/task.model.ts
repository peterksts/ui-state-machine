import {DataType} from './data-type.model';

export class Task {
  public category: string;
  public id: number;
  public name: string;
  public consumes: any[];
  public produces: any[];
  public properties: any[];
  public parameters: any[];
  public completion: any;
  public execution: any;
  public review: any;

  constructor() {
  }
}
