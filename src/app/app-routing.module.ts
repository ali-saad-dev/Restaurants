import { FactuurComponent } from './factuur/factuur.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent },
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'detail/:restaurantId', component: RestaurantDetailComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'contactform', component: ContactFormComponent },
  { path: 'checkoutform', component: CheckoutFormComponent },
  { path: 'factuur', component: FactuurComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


