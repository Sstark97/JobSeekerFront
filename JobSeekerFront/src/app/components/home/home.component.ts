import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs:any[] = [];

  constructor(private homeService: HomeService) { 
    this.homeService.getAllJobs()
    .then(res => this.jobs = res)
    .then(e => console.log(this.jobs[0].name));
  }

  ngOnInit(): void {
  }

}
