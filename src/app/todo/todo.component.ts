import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Card } from '../model/card';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  editForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('TODO')
  });

  todos: Card[];
  @Output() currentTodo = new EventEmitter();
  @Output() isEdit = new EventEmitter();

  constructor(private todoService: TodoService,
          private modalService: NgxSmartModalService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getToDos().subscribe(cardsTodo => {
      this.todos = cardsTodo as Card[];
    });
  }

  removeTodo(card: Card) {
    if(confirm("Deseja relmente deletar esse card?")){
      this.todoService.deleteTodo(card).subscribe( todo => {
        this.getTodos();
      })
    }
  }

  edit(card: Card) {
    this.editForm.patchValue({
      id: card.id,
      title: card.title,
      description: card.description,
      status: card.status
    });
    this.modalService.getModal("cardEditModal").open();
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.todoService.updateCard(this.editForm.value).subscribe(card => {
      this.editForm.patchValue({
        id: card.id,
        title: card.title,
        description: card.description,
        status: card.status
      });
    });
    this.modalService.getModal("cardEditModal").close();
    location.reload();
  }
}
