import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Behavior2Component } from './behavior2.component';

describe('Behavior2Component', () => {
  let component: Behavior2Component;
  let fixture: ComponentFixture<Behavior2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Behavior2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Behavior2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
