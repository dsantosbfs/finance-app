import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceLibComponent } from './finance-lib.component';

describe('FinanceLibComponent', () => {
  let component: FinanceLibComponent;
  let fixture: ComponentFixture<FinanceLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
