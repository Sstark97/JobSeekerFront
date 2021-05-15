import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/type';
import { LoginandregisterService } from 'src/app/service/loginandregister.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = {email:'',username:'',password:'',position:''}
  @Input() email:string = '';
  @Input() username:string = ''; 
  @Input() password:string = '';
  @Input() position:string = '';

  constructor(private loginRegisterService: LoginandregisterService) { }

  ngOnInit(): void {
  }

  register(){
    this.user.username = this.username;
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.position = this.position;

    this.loginRegisterService.registerUser(this.user);

    this.username = '';
    this.email = '';
    this.password = '';
    this.position = '';
  }

}
