import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice', src: 'https://salt.tikicdn.com/ts/product/05/26/27/198e664804f848ae38f1d482fbf2426c.png' },
      { id: 2, name: 'Narco', src: 'https://salt.tikicdn.com/ts/product/05/26/27/198e664804f848ae38f1d482fbf2426c.png'},
      { id: 3, name: 'Bombasto', src: 'https://salt.tikicdn.com/ts/product/05/26/27/198e664804f848ae38f1d482fbf2426c.png'},
      { id: 4, name: 'Celeritas', src: 'https://salt.tikicdn.com/ts/product/05/26/27/198e664804f848ae38f1d482fbf2426c.png'},
      { id: 5, name: 'Magneta', src: 'https://salt.tikicdn.com/ts/product/05/26/27/198e664804f848ae38f1d482fbf2426c.png'},
      { id: 6, name: 'RubberMan', src: 'https://salt.tikicdn.com/ts/product/05/26/27/198e664804f848ae38f1d482fbf2426c.png'},
      { id: 7, name: 'Dynama', src: 'https://salt.tikicdn.com/ts/product/05/26/27/198e664804f848ae38f1d482fbf2426c.png'},
      { id: 8, name: 'Dr IQ', src: 'https://salt.tikicdn.com/ts/product/05/26/27/198e664804f848ae38f1d482fbf2426c.png'},
      { id: 9, name: 'Magma', src: 'https://salt.tikicdn.com/ts/product/05/26/27/198e664804f848ae38f1d482fbf2426c.png'},
      { id: 10, name: 'Tornado', src: 'https://salt.tikicdn.com/ts/product/05/26/27/198e664804f848ae38f1d482fbf2426c.png' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}