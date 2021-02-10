import { Component, OnInit } from '@angular/core';
import { DoingService } from './doing.service';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  doing: any[];

  constructor(private doingService: DoingService) { }

  ngOnInit(): void {
    this.doing = this.doingService.getDoing();
  }

}
