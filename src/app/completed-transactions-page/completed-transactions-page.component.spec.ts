import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTransactionsPageComponent } from './completed-transactions-page.component';

describe('CompletedTransactionsPageComponent', () => {
  let component: CompletedTransactionsPageComponent;
  let fixture: ComponentFixture<CompletedTransactionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedTransactionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedTransactionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
