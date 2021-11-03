import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CookieService } from 'ngx-cookie-service';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { MenufilterPipe } from './Pipes/menufilter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    HomeComponent,
    HeaderComponent,
    RestaurantDetailComponent,
    FilterPipe,
    ShoppingCartComponent,
    ShippingComponent,
    CartItemComponent,
    ContactFormComponent,
    CheckoutFormComponent,
    MenufilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
    CookieService
  ],
             
  bootstrap: [AppComponent]
})
export class AppModule { }
