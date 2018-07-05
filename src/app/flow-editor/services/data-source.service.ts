import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tasks} from './tasks.const';
import {Task} from '../models/task.model';

@Injectable()
export class DataSourceService {

  constructor(private http: HttpClient) {
  }

  public getTasksLibrary(): Promise<Task[]> {
    return Promise.resolve(Tasks);
  }
}
