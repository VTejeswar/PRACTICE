import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazoneComponent } from './amazone.component';

describe('AmazoneComponent', () => {
  let component: AmazoneComponent;
  let fixture: ComponentFixture<AmazoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
