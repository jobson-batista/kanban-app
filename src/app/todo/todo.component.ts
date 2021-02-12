import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Card[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getToDos().subscribe(cardsTodo => {
      this.todos = cardsTodo as Card[];
    });
  }

  removeTodo(card: Card) {
    this.todoService.deleteTodo(card).subscribe( todo => {
      this.getTodos();
    })
  }

}
