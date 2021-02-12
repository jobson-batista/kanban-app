import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { DoneService } from './done.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  dones: Card[];

  constructor(private doneService: DoneService) {
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
   this.doneService.deleteDone(card).subscribe( done => {
     this.getCardsDones();
   });
  }

}
