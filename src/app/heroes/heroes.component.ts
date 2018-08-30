import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of, interval, Subject } from 'rxjs';
import { CallService } from '../services/call.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero ;


  constructor(public Util: CallService) { }

  ngOnInit() {
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.Util.sendClickCall(hero);
  }

}

export function getSingleValueObservable() {
  return of('single value');
}