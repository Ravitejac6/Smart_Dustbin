import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // errorMessage: string
  // successMessage: string

  // registerForm = this.fb.group({
  //   email: ['', Validators.required],
  //   password: ['', Validators.required]
  // });

  constructor(private fb:FormBuilder,private authService:AuthService) { }

  ngOnInit() {
  }
  trylogin() {
    this.authService.doGoogleLogin().then(v=>{
      console.log(v);
    })
  }
  login(){
    this.authService.anonymousLogin().then(v=>{
     // console.log(v);
    })
  }
  

}
