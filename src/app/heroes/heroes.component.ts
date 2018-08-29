import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of, interval } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  // hero: Hero = {
  // 	id:1,
  // 	name: 'Windstorm'
  // };

  selectedHero: Hero ;

  onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}

  constructor() { }

  ngOnInit() {
  }


  

  hero2 = 'Windstorm';
}

export function getSingleValueObservable() {
  return of('single value');
}