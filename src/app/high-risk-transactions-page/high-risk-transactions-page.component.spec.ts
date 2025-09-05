import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRiskTransactionsPageComponent } from './high-risk-transactions-page.component';

describe('HighRiskTransactionsPageComponent', () => {
  let component: HighRiskTransactionsPageComponent;
  let fixture: ComponentFixture<HighRiskTransactionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighRiskTransactionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighRiskTransactionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
