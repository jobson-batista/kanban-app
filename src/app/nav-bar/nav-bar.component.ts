import { Component, OnInit, Output } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() isEdit: boolean = false;

  constructor(public modalService: NgxSmartModalService) { }

  ngOnInit(): void {
  }

  createCard() {
    this.modalService.getModal("cardModal").open();
  }
}
