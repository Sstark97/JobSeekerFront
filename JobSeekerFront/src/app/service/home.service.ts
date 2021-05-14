import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getAllJobs() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => res.data);

  }

}
