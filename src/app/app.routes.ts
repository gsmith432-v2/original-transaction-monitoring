import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { PendingApprovalsPageComponent } from './pending-approvals-page/pending-approvals-page.component';
import { CompletedTransactionsPageComponent } from './completed-transactions-page/completed-transactions-page.component';
import { HighRiskTransactionsPageComponent } from './high-risk-transactions-page/high-risk-transactions-page.component';
import { TotalTransactionsPageComponent } from './total-transactions-page/total-transactions-page.component';
import { TotalVolumePageComponent } from './total-volume-page/total-volume-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'pending-approvals', component: PendingApprovalsPageComponent },
  { path: 'completed-transactions', component: CompletedTransactionsPageComponent },
  { path: 'high-risk-transactions', component: HighRiskTransactionsPageComponent },
  { path: 'total-transactions', component: TotalTransactionsPageComponent },
  { path: 'total-volume', component: TotalVolumePageComponent },
  { path: 'approvals', component: DashboardComponent },
  { path: 'reports', component: DashboardComponent },
  { path: 'audit', component: DashboardComponent }
];
