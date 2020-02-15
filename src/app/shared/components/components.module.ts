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
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CardInlineSliderComponent } from './card-inline-slider/card-inline-slider.component';
import { MutiselectGroupDropdownComponent } from './mutiselect-group-dropdown/mutiselect-group-dropdown.component';
import { CardSliderDirective } from '../directive/card-slider.directive';

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
    ContainerComponent,
    CardSliderComponent,
    CardSliderDirective,
    ProductCardComponent,
    AutoCompleteComponent,
    OrderTrackingComponent,
    CardProductComponent,
    CardInlineSliderComponent,
    MutiselectGroupDropdownComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    AntComponentModule,
    CarbonComponentModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AntComponentModule,
    CardSliderComponent,
    CardSliderDirective,
    CardProductComponent,
    AutoCompleteComponent,
    CardInlineSliderComponent
  ]
})
export class ComponentsModule { }
