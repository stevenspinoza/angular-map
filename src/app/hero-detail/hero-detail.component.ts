/// <reference types="@types/googlemaps" />
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { google } from 'google-maps';
//import { } from '@types/googlemaps';
import { HEROES } from '../mock-heroes';
import { Observable, Subscription } from 'rxjs';
//import { getSingleValueObservable } from 'util';
//https://coryrylan.com/blog/subscribing-to-multiple-observables-in-angular-components
import { CallService } from "../services/call.service";

declare var google:any;

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit,AfterViewInit {
  
  heroes = HEROES;

  constructor(public Util: CallService) { }

  subscription: Subscription;
  place: any;

  marker: any;

  ngOnInit() {
    this.subscription = this.Util.getClickCall().subscribe(place => {
 
        this.place = place;
        this.moveToPlace(place);

    });
    
  }

  ngAfterContentInit(){
  	 // getSingleValueObservable()
    //   .subscribe(value => value);
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
          animation: google.maps.Animation.BOUNCE,
          title: firstPlace.name                            
        });


        let infowindow = new google.maps.InfoWindow({
          content: this.markerLabel(firstPlace)
        });

        infowindow.open(map,startPosition);
  }


  
  moveToPlace(el){
    let newPlace = el.text;    
    let newLatLng = {lat: newPlace.lat, lng: newPlace.lng}
    let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: newLatLng
          });

    this.marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.BOUNCE,
        position: newLatLng
      });


    let infowindow = new google.maps.InfoWindow({
      content: this.markerLabel(newPlace)
    });

    
    this.marker.addListener('click', function() {
          infowindow.open(map, this.marker);
    });

    infowindow.open(map,this.marker);

  }


    markerLabel(newPlace){
      let contentString:any;
       return contentString = 
          '<div id="content">' +
          '<div id="siteNotice">'+
          '</div>'+
          '<h2 id="firstHeading" class="firstHeading">'+
          newPlace.name +
          '</h2>'+
          '<div id="bodyContent">'+
          '<img src="'+newPlace.image+'">'+
          '<p/>'+
          '<p>Latitude:'+ newPlace.lat +'</p>'+
          '<p>Longitude:'+ newPlace.lng +'</p>'+
          '</div>'+
          '</div>';

    }


}
