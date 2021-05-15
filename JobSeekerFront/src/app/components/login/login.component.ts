import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/type';
import { LoginandregisterService } from 'src/app/service/loginandregister.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = {email:'',username:'',password:'',position:''}

  @Input() email:string = '';
  @Input() password:string = '';
  fail:boolean = false;

  offerts: any = [1,2,3,4,5];
  constructor(private loginRegisterService: LoginandregisterService, private router: Router) { }

  ngOnInit(): void {
  }

  login() : void{
    this.loginRegisterService.loginUser(this.email,this.password)
        .then(user => this.user = user)
        .then(next => {
          this.email = '';
          this.password = '';
        })
        .then(e => console.log(this.user))
        .then(next => this.router.navigate(['home']))
        .catch(error => this.fail = true);
        

  }

}
