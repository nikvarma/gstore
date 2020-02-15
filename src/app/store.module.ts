import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './shared/layouts';
import { HomeComponent } from './pages/home/home.component';
import { FAQComponent } from './pages/faq/faq.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SelectDeliverySlotComponent } from './pages/select-delivery-slot/select-delivery-slot.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ErrorsComponent } from './pages/errors/errors.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';



export const StoreRoutes: Routes = [
  {
    path: 'store', component: LandingComponent, children: [
      { path: 'faq', component: FAQComponent },
      { path: 'auth', component: AuthComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'products/:category/:id', component: ProductsComponent },
      { path: 'delivery-slot', component: SelectDeliverySlotComponent },
      { path: 'terms-and-conditions', component: TermsConditionsComponent },
      { path: 'product/:category/:id/', component: ProductDetailsComponent },
      { path: '**', component: ErrorsComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    SharedModule,
    RouterModule.forChild(StoreRoutes),
  ],
  exports:[]
})
export class AppStoreModule { }