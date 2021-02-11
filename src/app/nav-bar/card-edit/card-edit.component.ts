import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  isEdit: boolean = false;

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit(): void {
  }

  createOrUpdate(){
    return !this.isEdit ? "Criar Card" : "Atualizar Card";
  }
  
  onClose() {
    this.editForm.reset();
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.editForm.reset();
  }

}
