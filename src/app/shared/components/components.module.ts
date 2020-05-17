import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { MenuComponent } from './menu/menu.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { CommentsComponent } from './comments/comments.component';
import { CarbonComponentModule } from 'src/app/carbon-component.module';
import { AntComponentModule } from 'src/app/ant-component.module';
import { RouterModule } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CardInlineSliderComponent } from './card-inline-slider/card-inline-slider.component';
import { MutiselectGroupDropdownComponent } from './mutiselect-group-dropdown/mutiselect-group-dropdown.component';
import { CardSliderDirective } from '../directive/card-slider.directive';
import { CartToggleButtonComponent } from './cart-toggle-button/cart-toggle-button.component';
import { FooterFeatureComponent } from './footer-feature/footer-feature.component';
import { SliderScrollDirective } from '../directive/slider-scroll.directive';
import { ContentScrollDirective } from '../directive/content-scroll.directive';
import { SlideCheckoutCartComponent } from './slide-checkout-cart/slide-checkout-cart.component';
import { AddedCartListComponent } from './added-cart-list/added-cart-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BigimgSliderComponent } from './bigimg-slider/bigimg-slider.component';
import { AddToCartButtonComponent } from './add-to-cart-button/add-to-cart-button.component';
import { TableGirdComponent } from './table-gird/table-gird.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    FilterComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    MycartComponent,
    CarouselComponent,
    CartListComponent,
    CartItemComponent,
    CommentsComponent,
    TableGirdComponent,
    ContainerComponent,
    CardSliderComponent,
    CardSliderDirective,
    ProductCardComponent,
    AutoCompleteComponent,
    OrderTrackingComponent,
    CardProductComponent,
    SliderScrollDirective,
    ContentScrollDirective,
    FooterFeatureComponent,
    CardInlineSliderComponent,
    CartToggleButtonComponent,
    MutiselectGroupDropdownComponent,
    SlideCheckoutCartComponent,
    AddedCartListComponent,
    ShoppingCartComponent,
    BigimgSliderComponent,
    AddToCartButtonComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    AntComponentModule,
    ReactiveFormsModule,
    CarbonComponentModule,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    FilterComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AntComponentModule,
    TableGirdComponent,
    CardSliderComponent,
    CardSliderDirective,
    CardProductComponent,
    AutoCompleteComponent,
    FooterFeatureComponent,
    BigimgSliderComponent,
    SliderScrollDirective,
    ContentScrollDirective,
    AddToCartButtonComponent,
    CardInlineSliderComponent,
    CartToggleButtonComponent,
    CardInlineSliderComponent
  ]
})
export class ComponentsModule { }
