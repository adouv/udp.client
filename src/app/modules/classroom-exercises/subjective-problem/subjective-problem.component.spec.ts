import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectiveProblemComponent } from './subjective-problem.component';

describe('SubjectiveProblemComponent', () => {
  let component: SubjectiveProblemComponent;
  let fixture: ComponentFixture<SubjectiveProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectiveProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectiveProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
