import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusTwoComponent } from './menus-two.component';

describe('MenusTwoComponent', () => {
  let component: MenusTwoComponent;
  let fixture: ComponentFixture<MenusTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
