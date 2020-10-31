import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudWithManyconceptComponent } from './crud-with-manyconcept.component';

describe('CrudWithManyconceptComponent', () => {
  let component: CrudWithManyconceptComponent;
  let fixture: ComponentFixture<CrudWithManyconceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudWithManyconceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudWithManyconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
