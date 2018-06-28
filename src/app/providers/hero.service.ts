import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes = [
    {id: 1, name: 'ljy'},
    {id: 2, name: 'lxs'},
    {id: 3, name: 'Magneta'}
  ]

  constructor() { }

  getHero(id: number) {    
    return this.heroes.find(item => item.id === id)
  }
}
