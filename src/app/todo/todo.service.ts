import { Injectable } from '@angular/core';
import { cards } from '../data/cards.data.js';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getToDos(): any[]{
    let todos = [];
    cards.forEach(card => {
      if(card.status === "todo") {
        todos.push(card);
      }
    });
    return todos;
  }

}
