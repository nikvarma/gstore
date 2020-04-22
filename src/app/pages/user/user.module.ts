import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { ChatSupportComponent } from './chat-support/chat-support.component';
import { UserRoutingModule } from './user.router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    OrdersComponent,
    SettingsComponent,
    PaymentModeComponent,
    OrderStatusComponent,
    ChatSupportComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],exports: [
    ProfileComponent,
    OrdersComponent,
    SettingsComponent,
    PaymentModeComponent,
    OrderStatusComponent,
    ChatSupportComponent,
    DashboardComponent
  ]
})
export class UserModule { }
