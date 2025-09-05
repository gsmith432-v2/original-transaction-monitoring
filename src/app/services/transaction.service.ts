import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  fromAccount: string;
  toAccount: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  timestamp: Date;
  type: 'wire' | 'ach' | 'internal' | 'international';
  riskScore: number;
  approver?: string;
  notes?: string;
}

export interface TransactionSummary {
  totalTransactions: number;
  pendingApprovals: number;
  completedToday: number;
  totalVolume: number;
  highRiskTransactions: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  public transactions$ = this.transactionsSubject.asObservable();

  private mockTransactions: Transaction[] = [
    {
      id: 'TXN-001',
      amount: 250000,
      currency: 'USD',
      fromAccount: '****1234',
      toAccount: '****5678',
      description: 'Wire transfer to vendor payment',
      status: 'pending',
      timestamp: new Date('2024-09-01T10:30:00'),
      type: 'wire',
      riskScore: 85,
      notes: 'High value transaction requires dual approval'
    },
    {
      id: 'TXN-002',
      amount: 15000,
      currency: 'USD',
      fromAccount: '****2345',
      toAccount: '****6789',
      description: 'ACH payment for payroll',
      status: 'approved',
      timestamp: new Date('2024-09-01T09:15:00'),
      type: 'ach',
      riskScore: 25,
      approver: 'Sarah Johnson'
    },
    {
      id: 'TXN-003',
      amount: 500000,
      currency: 'USD',
      fromAccount: '****3456',
      toAccount: '****7890',
      description: 'International wire transfer',
      status: 'pending',
      timestamp: new Date('2024-09-01T11:45:00'),
      type: 'international',
      riskScore: 95,
      notes: 'Requires compliance review'
    },
    {
      id: 'TXN-004',
      amount: 75000,
      currency: 'USD',
      fromAccount: '****4567',
      toAccount: '****8901',
      description: 'Internal transfer between accounts',
      status: 'completed',
      timestamp: new Date('2024-09-01T08:20:00'),
      type: 'internal',
      riskScore: 15,
      approver: 'Michael Chen'
    },
    {
      id: 'TXN-005',
      amount: 125000,
      currency: 'EUR',
      fromAccount: '****5678',
      toAccount: '****9012',
      description: 'Cross-border payment',
      status: 'rejected',
      timestamp: new Date('2024-09-01T07:30:00'),
      type: 'international',
      riskScore: 78,
      approver: 'David Wilson',
      notes: 'Insufficient documentation provided'
    }
  ];

  constructor() {
    this.transactionsSubject.next(this.mockTransactions);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.transactions$.pipe(delay(500));
  }

  getTransactionById(id: string): Observable<Transaction | undefined> {
    return this.transactions$.pipe(
      map(transactions => transactions.find(t => t.id === id)),
      delay(300)
    );
  }

  getPendingTransactions(): Observable<Transaction[]> {
    return this.transactions$.pipe(
      map(transactions => transactions.filter(t => t.status === 'pending')),
      delay(400)
    );
  }

  getHighRiskTransactions(): Observable<Transaction[]> {
    return this.transactions$.pipe(
      map(transactions => transactions.filter(t => t.riskScore >= 70)),
      delay(400)
    );
  }

  getTransactionSummary(): Observable<TransactionSummary> {
    return this.transactions$.pipe(
      map(transactions => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        return {
          totalTransactions: transactions.length,
          pendingApprovals: transactions.filter(t => t.status === 'pending').length,
          completedToday: transactions.filter(t => {
            const txnDate = new Date(t.timestamp);
            txnDate.setHours(0, 0, 0, 0);
            return txnDate.getTime() === today.getTime() && t.status === 'completed';
          }).length,
          totalVolume: transactions.reduce((sum, t) => sum + t.amount, 0),
          highRiskTransactions: transactions.filter(t => t.riskScore >= 70).length
        };
      }),
      delay(300)
    );
  }

  approveTransaction(id: string, approver: string): Observable<boolean> {
    const transactions = this.transactionsSubject.value;
    const transaction = transactions.find(t => t.id === id);
    
    if (transaction && transaction.status === 'pending') {
      transaction.status = 'approved';
      transaction.approver = approver;
      this.transactionsSubject.next([...transactions]);
      return of(true).pipe(delay(800));
    }
    
    return of(false).pipe(delay(800));
  }

  rejectTransaction(id: string, approver: string, notes: string): Observable<boolean> {
    const transactions = this.transactionsSubject.value;
    const transaction = transactions.find(t => t.id === id);
    
    if (transaction && transaction.status === 'pending') {
      transaction.status = 'rejected';
      transaction.approver = approver;
      transaction.notes = notes;
      this.transactionsSubject.next([...transactions]);
      return of(true).pipe(delay(800));
    }
    
    return of(false).pipe(delay(800));
  }

  getCompletedTransactions(): Observable<Transaction[]> {
    return this.transactions$.pipe(
      map(transactions => transactions.filter(t => t.status === 'completed')),
      delay(400)
    );
  }

  getApprovedTransactions(): Observable<Transaction[]> {
    return this.transactions$.pipe(
      map(transactions => transactions.filter(t => t.status === 'approved')),
      delay(400)
    );
  }

  getTransactionsByVolume(): Observable<Transaction[]> {
    return this.transactions$.pipe(
      map(transactions => [...transactions].sort((a, b) => b.amount - a.amount)),
      delay(400)
    );
  }
}
