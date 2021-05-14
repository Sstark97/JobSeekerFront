import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  offerts: any = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
