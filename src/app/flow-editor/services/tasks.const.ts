import {DataType} from '../models/data-type.model';

export const Tasks = [
  {
    id: 1,
    title: 'Load CSV',
    inputPorts: [],
    outputPorts: [
      {id: 1, type: DataType.DataSet}
    ]
  },
  {
    id: 2,
    title: 'Load XLS',
    inputPorts: [],
    outputPorts: [
      {id: 1, type: DataType.DataSet}
    ]
  },
  {
    id: 3,
    title: 'Calculate',
    inputPorts: [
      {id: 1, type: DataType.DataSet}],
    outputPorts: [
      {id: 1, type: DataType.DataSet}
    ]
  },
  {
    id: 4,
    title: 'Log',
    inputPorts: [
      {id: 1, type: DataType.DataSet}],
    OutputPorts: []
  },
];
