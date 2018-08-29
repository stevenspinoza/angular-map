/// <reference types="@types/googlemaps" />
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { google } from 'google-maps';
//import { } from '@types/googlemaps';
import { HEROES } from '../mock-heroes';
import { Observable, Subscription } from 'rxjs';
import {
  getSingleValueObservable,
} from 'util';
//https://coryrylan.com/blog/subscribing-to-multiple-observables-in-angular-components


declare var google:any;

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit,AfterViewInit {
  
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
     getSingleValueObservable()
      .subscribe(value => this.first = value);
  }

  ngAfterContentInit(){
  	
  }

  ngAfterViewInit(){

      let firstPlace = this.heroes[0];
  		let coord = new google.maps.LatLng(firstPlace.lat,firstPlace.lng);
  		//console.log(coord) ;
  	  	let map = new google.maps.Map(document.getElementById('map'), {
      	  center: {lat: 8.982935, lng: -79.518410},
      	  zoom: 20
      	});

        let startPosition = new google.maps.Marker({    
          position: coord,                        
          map: map,
          title: firstPlace.name                            
        });

  }

  moveToPlace(el){
    let newPlace = el;
    let newLatLng = {lat: el.lat, lng: el.lng}
    let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: newLatLng
          });

    }

}
