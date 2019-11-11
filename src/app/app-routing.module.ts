import { Routes } from '@angular/router';

export const AppRouts: Routes = [
  { path: 'home', loadChildren: './features/home/home.module#HomeModule' },
  { path: 'login', loadChildren: './features/login/login.module#LoginModule' },
  { path: 'users', loadChildren: './features/users/users.module#UsersModule' },
  { path: 'create-account', loadChildren: './features/create-account/create-account.module#CreateAccountModule' },
  { path: 'dashboard', loadChildren: './features/dashboard/dashboard.module#DashboardModule' },
  { path: 'bills', loadChildren: './features/bills/bills.module#BillsModule' },
  { path: 'configuration', loadChildren: './features/configuration/configuration.module#ConfigurationModule' },
  { path: 'transactions', loadChildren: './features/transactions/transactions.module#TransactionsModule' },
  { path: 'bank-accounts', loadChildren: './features/bank-accounts/bank-accounts.module#BankAccountsModule' },

  { path: '**', pathMatch: 'full', redirectTo: '/home' },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];
