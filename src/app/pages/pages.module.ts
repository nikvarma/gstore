import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { FAQComponent } from './faq/faq.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthComponent } from './auth/auth.component';
import { SelectDeliverySlotComponent } from './select-delivery-slot/select-delivery-slot.component';
import { ErrorsComponent } from './errors/errors.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    FAQComponent,
    HomeComponent,
    AuthComponent,
    ErrorsComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactUsComponent,
    ProductDetailsComponent,
    TermsConditionsComponent,
    SelectDeliverySlotComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    SharedModule
  ]
})
export class PagesModule { }
