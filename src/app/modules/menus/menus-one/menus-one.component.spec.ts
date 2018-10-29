import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusOneComponent } from './menus-one.component';

describe('MenusOneComponent', () => {
  let component: MenusOneComponent;
  let fixture: ComponentFixture<MenusOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
