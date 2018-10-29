import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryClassComponent } from './temporary-class.component';

describe('TemporaryClassComponent', () => {
  let component: TemporaryClassComponent;
  let fixture: ComponentFixture<TemporaryClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporaryClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
