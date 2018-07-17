import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should subscribe on task change', inject([TaskService], (service: TaskService, done: DoneFn) => {
    service.subscribeOnTaskChanged(value => {
      expect(value).not.toBeNull();
      done();
    });
  }));
});
