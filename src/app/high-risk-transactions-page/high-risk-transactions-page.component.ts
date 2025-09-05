import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionService, Transaction } from '../services/transaction.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-high-risk-transactions-page',
  templateUrl: './high-risk-transactions-page.component.html',
  styleUrls: ['./high-risk-transactions-page.component.scss']
})
export class HighRiskTransactionsPageComponent implements OnInit, OnDestroy {
  transactions: Transaction[] = [];
  isLoading = true;
  private destroy$ = new Subject<void>();

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadHighRiskTransactions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadHighRiskTransactions(): void {
    this.transactionService.getHighRiskTransactions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(transactions => {
        this.transactions = transactions;
        this.isLoading = false;
      });
  }

  approveTransaction(transactionId: string): void {
    this.transactionService.approveTransaction(transactionId, 'John Smith')
      .pipe(takeUntil(this.destroy$))
      .subscribe(success => {
        if (success) {
          this.loadHighRiskTransactions();
        }
      });
  }

  rejectTransaction(transactionId: string): void {
    this.transactionService.rejectTransaction(transactionId, 'John Smith', 'Rejected due to high risk')
      .pipe(takeUntil(this.destroy$))
      .subscribe(success => {
        if (success) {
          this.loadHighRiskTransactions();
        }
      });
  }

  getRiskLevelClass(riskScore: number): string {
    if (riskScore >= 80) return 'risk-critical';
    if (riskScore >= 60) return 'risk-high';
    if (riskScore >= 40) return 'risk-medium';
    return 'risk-low';
  }

  formatCurrency(amount: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date));
  }
}
