import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  crisis = [
    {id: 1, name: 'Dragon Burning Cities'},
    {id: 2, name: 'Sky Rains Great White Sharks'}
  ]

  constructor() { }

  getCrisisItem(id: number) {
    return this.crisis.find(item => item.id === id)
  }
}
