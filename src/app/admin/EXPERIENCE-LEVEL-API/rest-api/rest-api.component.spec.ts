import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestAPIComponent } from './rest-api.component';

describe('RestAPIComponent', () => {
  let component: RestAPIComponent;
  let fixture: ComponentFixture<RestAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
