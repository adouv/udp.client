import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipticalPageComponent } from './elliptical-page.component';

describe('EllipticalPageComponent', () => {
  let component: EllipticalPageComponent;
  let fixture: ComponentFixture<EllipticalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EllipticalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipticalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
