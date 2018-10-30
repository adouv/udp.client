import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTakingComponent } from './note-taking.component';

describe('NoteTakingComponent', () => {
  let component: NoteTakingComponent;
  let fixture: ComponentFixture<NoteTakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteTakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
