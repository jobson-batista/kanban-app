import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { DoingService } from './doing.service';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  doing: Card[];

  constructor(private doingService: DoingService) { }

  ngOnInit(): void {
    this.getCardsDoing();
  }

  getCardsDoing() {
    this.doingService.getDoing().subscribe( doingList => {
      this.doing = doingList as Card[];
    } );
  }

  removeCard(card: Card) {
    this.doingService.deleteDoing(card).subscribe( doing => {
      this.getCardsDoing();
    })
  }

}
