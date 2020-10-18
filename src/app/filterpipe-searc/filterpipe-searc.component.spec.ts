import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterpipeSearcComponent } from './filterpipe-searc.component';

describe('FilterpipeSearcComponent', () => {
  let component: FilterpipeSearcComponent;
  let fixture: ComponentFixture<FilterpipeSearcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterpipeSearcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterpipeSearcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
