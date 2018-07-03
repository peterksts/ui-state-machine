import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPlumbComponent } from './test-plumb.component';

describe('TestPlumbComponent', () => {
  let component: TestPlumbComponent;
  let fixture: ComponentFixture<TestPlumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPlumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPlumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
