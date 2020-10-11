import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Behavior1Component } from './behavior1.component';

describe('Behavior1Component', () => {
  let component: Behavior1Component;
  let fixture: ComponentFixture<Behavior1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Behavior1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Behavior1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
