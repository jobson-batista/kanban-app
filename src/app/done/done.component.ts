import { Component, OnInit } from '@angular/core';
import { DoneService } from './done.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  dones = [];

  constructor(private doneService: DoneService) { }

  ngOnInit(): void {
    this.dones = this.doneService.getDones();
  }

}
