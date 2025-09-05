import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { PendingApprovalsPageComponent } from './pending-approvals-page/pending-approvals-page.component';
import { CompletedTransactionsPageComponent } from './completed-transactions-page/completed-transactions-page.component';
import { HighRiskTransactionsPageComponent } from './high-risk-transactions-page/high-risk-transactions-page.component';
import { TotalTransactionsPageComponent } from './total-transactions-page/total-transactions-page.component';
import { TotalVolumePageComponent } from './total-volume-page/total-volume-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransactionListComponent,
    PendingApprovalsPageComponent,
    CompletedTransactionsPageComponent,
    HighRiskTransactionsPageComponent,
    TotalTransactionsPageComponent,
    TotalVolumePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
