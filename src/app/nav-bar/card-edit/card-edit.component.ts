import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardEditService } from './card-edit.service';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('TODO')
  });

  isEdit: boolean = false;
  card = {} as Card;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    public cardService: CardEditService) { }

  ngOnInit(): void {
  }

  createOrUpdate(){
    return !this.isEdit ? "Criar Card" : "Atualizar Card";
  }
  
  onClose() {
    this.editForm.patchValue({title:"",description:"",status:"TODO"});
  }

  onSubmit() {
    this.card = this.editForm.value;
    this.cardService.saveCard(this.card).subscribe(()=>{    
      this.clearForm();
      location.reload();
    });
    this.ngxSmartModalService.close("cardModal");
  }

  clearForm(){
    this.editForm.patchValue({title:"",description:"",status:"TODO"});
  }
}
