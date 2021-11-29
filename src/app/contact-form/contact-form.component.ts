import { RestaurantModel } from './../classes/RestaurantModel';
import { RestaurantDetailComponent } from './../restaurant-detail/restaurant-detail.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../database/cart.service';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core'
import { MapInfoWindow, GoogleMap, MapMarker } from '@angular/google-maps'
import { DatabaseService } from './../database/database.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false })
  infoWindow!: MapInfoWindow;

  infoContent!: string;
  @ViewChild(GoogleMap, { static: false })
  map!: GoogleMap;
  zoom = 15
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  }

  markers = Array();


  constructor(
    private databaseService: DatabaseService,
    private Router: Router) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 52.6323056,
        lng: 4.747497815
      }
    })
    this.addMarkers();
  }

  addMarkers() {
    const restaurants = this.databaseService.getRestaurants();
    for (let i = 0; i < restaurants.length; i++) {
      const restaurant = restaurants[i];
      this.addMarker(restaurant);
    }
  }
  addMarker(restaurant: RestaurantModel): void {
    this.markers.push({
      position: {
        lat: restaurant.position.lat,
        lng: restaurant.position.lng
      },
      label: {
        color: 'white',
        text: restaurant.name + (this.markers.length + 1),
      },
      color: 'black',
      title: restaurant.name + (this.markers.length + 1),
      options: { animation: google.maps.Animation.DROP },
    })
  }

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.infoWindow.open(marker);
  }





userForm = new FormGroup({
  firstname: new FormControl('', Validators.required),
  lastname: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  message: new FormControl('', Validators.required)
});

  public isSuccess!: boolean;

onSubmit() {
  if (this.userForm.valid) {
    this.isSuccess = true;
    this.userForm.reset();
    setTimeout(() => {
      this.Router.navigate(['restaurants'])
    }, 3000);
  }
}
}
