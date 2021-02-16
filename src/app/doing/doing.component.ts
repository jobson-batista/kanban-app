import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Card } from '../model/card';
import { DoingService } from './doing.service';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  doing: Card[];
  editForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('TODO')
  });

  constructor(private doingService: DoingService,
          private modalService: NgxSmartModalService) { }

  ngOnInit(): void {
    this.getCardsDoing();
  }

  getCardsDoing() {
    this.doingService.getDoing().subscribe( doingList => {
      this.doing = doingList as Card[];
    } );
  }

  removeCard(card: Card) {
    if(confirm("Deseja relmente deletar esse card?")){
      this.doingService.deleteDoing(card).subscribe( doing => {
        this.getCardsDoing();
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
    this.modalService.getModal("cardEditModalDoing").open();
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.doingService.updateCard(this.editForm.value).subscribe(card => {
      this.editForm.patchValue({
        id: card.id,
        title: card.title,
        description: card.description,
        status: card.status
      });
    });
    this.modalService.getModal("cardEditModalDoing").close();
    location.reload();
  }

}
