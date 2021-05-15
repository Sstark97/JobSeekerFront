import { Injectable } from '@angular/core';
import { User } from '../model/type';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class LoginandregisterService {
  backend:string = 'http://localhost:3000';

  constructor() { }

  registerUser(user:User): void{
    axios.post(`${this.backend}/user/register`,user)
         .then(res => console.log('User registered'));
  }

  loginUser(email:string,password:string) : Promise<User>{
    return axios.post(`${this.backend}/user/login`,{email,password})
                .then(res => res.data);
                
  }
}
