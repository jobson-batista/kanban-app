import { Injectable } from '@angular/core';
import { cards } from '../data/cards.data.js';

@Injectable({
  providedIn: 'root'
})
export class DoneService {

  constructor() { }

  getDones(): any[]{
    let dones = [];
    cards.forEach(card => {
      if(card.status === "done"){
        dones.push(card);
      }
    });
    return dones;
  }
}
