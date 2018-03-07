import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm :FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstName' : new FormControl(null),
      'lastName' : new FormControl(null),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'password' : new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    console.log(this.signUpForm.value);
    this.signUpForm.reset()
  }

}
