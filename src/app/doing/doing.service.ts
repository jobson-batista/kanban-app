import { Injectable } from '@angular/core';
import { cards } from '../data/cards.data.js';

@Injectable({
  providedIn: 'root'
})
export class DoingService {

  constructor() { }

  getDoing(): any[] {
    let doing = [];
    cards.forEach((card) => {
      card.status === "doing" ? doing.push(card) : null;
    });
    return doing;
  }
}
