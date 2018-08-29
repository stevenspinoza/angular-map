/// <reference types="@types/googlemaps" />
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { google } from 'google-maps';
//import { } from '@types/googlemaps';
declare var google:any;

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit,AfterViewInit {
  
  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit(){
  	
  }

  ngAfterViewInit(){
  		//let coord = new google.maps.LatLng(-34.397,150.644);
  		//console.log(coord) ;
  	  	let map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 8.982935, lng: -79.518410},
	  zoom: 20
	});
  }

}
