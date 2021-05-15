import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  offerts: any = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
