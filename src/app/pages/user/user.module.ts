import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { ChatSupportComponent } from './chat-support/chat-support.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user.router';
import { UserLandingComponent } from 'src/app/shared/layouts/user-landing/user-landing.component';


@NgModule({
  declarations: [
    ProfileComponent,
    OrdersComponent,
    SettingsComponent,
    PaymentModeComponent,
    OrderStatusComponent,
    ChatSupportComponent,
    UserLandingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
