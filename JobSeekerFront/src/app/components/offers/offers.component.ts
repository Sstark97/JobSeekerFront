import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offerts: any = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
