import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderStatusComponent } from './order-status/order-status.component';

const routes: Routes = [
    {
      path: '', component: DashboardComponent, children: [
        { path: '', redirectTo: 'profile', pathMatch: 'full' },
        { path: 'orders', component: OrdersComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'wishlist', component: OrdersComponent },
        { path: 'settings', component: SettingsComponent },
        { path: 'order-status', component: OrderStatusComponent },
        { path: 'payment-mode', component: PaymentModeComponent },
      ]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }