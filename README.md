# Enterprise Banking Transaction Processing Application (Angular 14)

A comprehensive transaction processing application for enterprise banking built with Angular 14, demonstrating modern banking workflows including real-time monitoring, approval systems, and risk assessment.

## 🏦 Features

### Dashboard Overview
- **Real-time transaction monitoring** with live summary cards
- **5 Clickable Dashboard Cards** that navigate to filtered transaction views:
  - 📊 **Total Transactions** - Complete transaction overview
  - ⏳ **Pending Approvals** - 2-row table of transactions requiring approval
  - ✅ **Completed Today** - Successfully processed transactions
  - 💰 **Total Volume** - Transactions sorted by amount (highest first)
  - ⚠️ **High Risk** - Transactions flagged for risk assessment (score ≥ 70)

### Transaction Management
- **Comprehensive transaction table** with metadata including:
  - Transaction ID, timestamp, amount, currency
  - From/To account information
  - Transaction type (Wire, ACH, Internal, International)
  - Status tracking (Pending, Approved, Rejected, Completed)
  - Risk scoring and assessment
  - Description and notes
- **Approve/Reject workflow** with real-time dashboard updates
- **Search and filtering** capabilities
- **Professional banking UI** with hover effects and responsive design

### Technical Architecture
- **Angular 14** with traditional module-based architecture
- **RxJS observables** for reactive data management
- **Mock transaction service** with realistic banking data
- **Responsive design** optimized for enterprise banking workflows
- **Professional styling** with banking industry standards

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Angular CLI 14

### Installation
```bash
npm install
```

### Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200/` for the dashboard.

### Build
```bash
ng build
```
Build artifacts will be stored in the `dist/` directory.

## 📱 Application Structure

```
src/app/
├── dashboard/                    # Main dashboard with clickable cards
├── pending-approvals-page/       # 2-row pending transactions table
├── completed-transactions-page/  # Filtered completed transactions
├── high-risk-transactions-page/  # High-risk transaction monitoring
├── total-transactions-page/      # Complete transaction overview
├── total-volume-page/           # Volume-sorted transaction view
├── transaction-list/            # Main transaction management
└── services/
    └── transaction.service.ts   # Mock banking data and operations
```

## 🎯 Key Functionality

### Clickable Dashboard Cards
Each summary card on the dashboard is clickable and navigates to a dedicated filtered view:
- **Hover effects** provide visual feedback
- **Real-time data** updates when transactions are processed
- **Consistent navigation** with "Back to Dashboard" functionality

### Pending Approvals Workflow
- Displays exactly **2 rows** of pending transactions as requested
- **Approve/Reject buttons** with immediate dashboard updates
- **Risk assessment** integration for decision support
- **Dual approval** workflow for high-value transactions

### Transaction Filtering
- **Status-based filtering** (pending, approved, completed, rejected)
- **Risk-based filtering** (high-risk transactions ≥ 70 score)
- **Volume-based sorting** (highest amounts first)
- **Real-time updates** across all filtered views

## 🔧 Development

### Running Tests
```bash
ng test
```

### Code Generation
```bash
ng generate component component-name
```

### Linting
```bash
ng lint
```

## 🏗️ Architecture Decisions

This application was built with **Angular 14** to demonstrate:
- Traditional module-based architecture
- Component-based design patterns
- Service injection and dependency management
- RxJS reactive programming
- Professional enterprise UI/UX

The codebase serves as a foundation for demonstrating Angular upgrade paths to newer versions (Angular 18+) showcasing improvements in:
- Standalone components
- New control flow syntax
- Signals and reactive primitives
- Enhanced performance optimizations

## 📊 Mock Data

The application includes realistic banking transaction data with:
- **5 sample transactions** with varying statuses and risk levels
- **Multiple transaction types** (Wire, ACH, Internal, International)
- **Risk scoring** from 15-95 for comprehensive testing
- **Currency support** (USD, EUR) with proper formatting
- **Realistic amounts** from $15,000 to $500,000

## 🎨 UI/UX Features

- **Professional banking design** with enterprise-grade styling
- **Responsive layout** optimized for desktop banking workflows
- **Interactive hover effects** on clickable elements
- **Consistent color coding** for transaction types and risk levels
- **Loading states** and empty state handling
- **Accessibility considerations** with proper ARIA labels

## 📈 Future Enhancements

This Angular 14 foundation is designed for future upgrades to demonstrate:
- Migration to Angular 18+ standalone components
- Implementation of Angular Signals
- New control flow syntax (@if, @for, @switch)
- Enhanced performance with OnPush change detection
- Modern Angular patterns and best practices

---

Built with ❤️ for enterprise banking workflows
