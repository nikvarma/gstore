import { Routes, RouterModule } from '@angular/router';
import { UserLandingComponent } from 'src/app/shared/layouts/user-landing/user-landing.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    {
      path: 'user', component: UserLandingComponent, children: [
        { path: '', component: OrdersComponent, pathMatch: 'full', outlet: 'user-router-outlet' },
        { path: 'orders', component: OrdersComponent, outlet: 'user-router-outlet' },
        { path: 'profile', component: ProfileComponent, outlet: 'user-router-outlet' },
        { path: 'settings', component: SettingsComponent, outlet: 'user-router-outlet' },
        { path: 'payment-mode', component: PaymentModeComponent, outlet: 'user-router-outlet' },
      ]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }