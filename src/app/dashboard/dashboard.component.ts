import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionService, Transaction, TransactionSummary } from '../services/transaction.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  summary: TransactionSummary | null = null;
  pendingTransactions: Transaction[] = [];
  highRiskTransactions: Transaction[] = [];
  isLoading = true;
  
  private destroy$ = new Subject<void>();

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadDashboardData(): void {
    this.isLoading = true;

    this.transactionService.getTransactionSummary()
      .pipe(takeUntil(this.destroy$))
      .subscribe(summary => {
        this.summary = summary;
        this.isLoading = false;
      });

    this.transactionService.getPendingTransactions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(transactions => {
        this.pendingTransactions = transactions.slice(0, 5);
      });

    this.transactionService.getHighRiskTransactions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(transactions => {
        this.highRiskTransactions = transactions.slice(0, 3);
      });
  }

  approveTransaction(transactionId: string): void {
    this.transactionService.approveTransaction(transactionId, 'John Smith')
      .pipe(takeUntil(this.destroy$))
      .subscribe(success => {
        if (success) {
          this.loadDashboardData();
        }
      });
  }

  rejectTransaction(transactionId: string): void {
    this.transactionService.rejectTransaction(transactionId, 'John Smith', 'Rejected from dashboard')
      .pipe(takeUntil(this.destroy$))
      .subscribe(success => {
        if (success) {
          this.loadDashboardData();
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
}
