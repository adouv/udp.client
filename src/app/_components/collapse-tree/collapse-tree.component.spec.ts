import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseTreeComponent } from './collapse-tree.component';

describe('CollapseTreeComponent', () => {
  let component: CollapseTreeComponent;
  let fixture: ComponentFixture<CollapseTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
