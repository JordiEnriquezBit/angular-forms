import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user-complete';

@Component({
  selector: 'app-form03',
  templateUrl: './form03.component.html',
  styleUrls: ['./form03.component.scss']
})
export class Form03Component implements OnInit {
  hide = true;
  placeholders={
    username:'type your user name',
    userpass:'type your password'
  }
  genders = [
    "Male",
    "Female",
    "Other"
  ];
  user:User = new User();
  constructor() {
    console.log(this.user.username);
    console.log(this.user.password);
  }
  createUser(form){
    console.log(form);
    this.user.username = form.controls.username.value;
    this.user.password = form.controls.userpass.value;
  }

  getError(){
    return 'error';
  }
  ngOnInit(): void {
  }

}
