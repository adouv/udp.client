import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInClassComponent } from './sing-in-class.component';

describe('SingInClassComponent', () => {
  let component: SingInClassComponent;
  let fixture: ComponentFixture<SingInClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
