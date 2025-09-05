import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTransactionsPageComponent } from './total-transactions-page.component';

describe('TotalTransactionsPageComponent', () => {
  let component: TotalTransactionsPageComponent;
  let fixture: ComponentFixture<TotalTransactionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalTransactionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalTransactionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
