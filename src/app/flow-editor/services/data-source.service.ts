import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tasks} from '../data/tasks.const';

@Injectable()
export class DataSourceService {

  public tasks: any[];
  public categories = ['load', 'annotate', 'engineer', 'model', 'monitor', 'process', 'deploy', 'integrate', 'develop'];

  constructor(private http: HttpClient) {
  }

  public getTasksLibrary(): Promise<Task[]> {
    return Promise.resolve(this.handleTasks(Tasks));
  }

  private handleTasks(tasks) {
    this.tasks = [];
    this.categories.forEach(cat => {
      const newTaskCategory = {
        name: cat,
        tasks: []
      };
      tasks.forEach(task => {
        if (task.category === cat) {
          newTaskCategory.tasks.push(task);
        }
      });
      this.tasks.push(newTaskCategory);
    });
    return this.tasks;
  }

  public getTasks(): Promise<any> {
    return this.http.get('/taskdefinitions?$sort[name]=1')
      .toPromise()
      .then(res => this.handleTasks(res));
  }


}
