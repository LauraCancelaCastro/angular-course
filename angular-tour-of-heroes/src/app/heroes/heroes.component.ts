import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  public heroes:Hero[] = HEROES;
  
  public hero:Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit():void {
    this.getHeroes();
  }

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}