import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionService, Transaction } from '../services/transaction.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, OnDestroy {
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  isLoading = true;
  
  filterStatus: string = 'all';
  filterType: string = 'all';
  searchTerm: string = '';
  
  private destroy$ = new Subject<void>();

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadTransactions(): void {
    this.isLoading = true;
    
    this.transactionService.getTransactions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(transactions => {
        this.transactions = transactions;
        this.applyFilters();
        this.isLoading = false;
      });
  }

  applyFilters(): void {
    this.filteredTransactions = this.transactions.filter(transaction => {
      const matchesStatus = this.filterStatus === 'all' || transaction.status === this.filterStatus;
      const matchesType = this.filterType === 'all' || transaction.type === this.filterType;
      const matchesSearch = this.searchTerm === '' || 
        transaction.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        transaction.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        transaction.fromAccount.includes(this.searchTerm) ||
        transaction.toAccount.includes(this.searchTerm);
      
      return matchesStatus && matchesType && matchesSearch;
    });
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  approveTransaction(transactionId: string): void {
    this.transactionService.approveTransaction(transactionId, 'John Smith')
      .pipe(takeUntil(this.destroy$))
      .subscribe(success => {
        if (success) {
          this.loadTransactions();
        }
      });
  }

  rejectTransaction(transactionId: string): void {
    this.transactionService.rejectTransaction(transactionId, 'John Smith', 'Rejected from transaction list')
      .pipe(takeUntil(this.destroy$))
      .subscribe(success => {
        if (success) {
          this.loadTransactions();
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
