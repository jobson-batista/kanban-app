import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Card } from '../model/card';
import { DoneService } from './done.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  dones: Card[];
  editForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('TODO')
  });

  constructor(private doneService: DoneService, 
        private modalService: NgxSmartModalService) {
  }

  ngOnInit(): void {
    this.getCardsDones();
  }

  getCardsDones() {
    this.doneService.getDones().subscribe( (cards: Card[] ) => {
      this.dones = cards;
    });
  }

  removeCard(card: Card){
    if(confirm("Deseja relmente deletar esse card?")){
      this.doneService.deleteDone(card).subscribe( done => {
        this.getCardsDones();
      });
    }
  }

  edit(card: Card) {
    this.editForm.patchValue({
      id: card.id,
      title: card.title,
      description: card.description,
      status: card.status
    });
    this.modalService.getModal("cardEditModalDone").open();
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.doneService.updateCard(this.editForm.value).subscribe(card => {
      this.editForm.patchValue({
        id: card.id,
        title: card.title,
        description: card.description,
        status: card.status
      });
    });
    this.modalService.getModal("cardEditModalDone").close();
    location.reload();
  }

}
