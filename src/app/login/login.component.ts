import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  data;
  check : boolean = false;
  inValidUser: boolean = false;
  noUserFound: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.data = localStorage.getItem('userData');

    console.log("data........", JSON.parse(this.data));
  }

  get f() { return this.loginForm.controls; }

  onLogin() { 
    console.log('for data.....',this.loginForm.value);
    //console.log('Checking.....',JSON.parse(localStorage.getItem(`userData-`+this.loginForm.value.username)).password);
    this.check = true; 
    if (this.loginForm.valid) {
      let localData = JSON.parse(localStorage.getItem(`userData-`+this.loginForm.value.username));   
      // console.log('get the local data of user', JSON.parse(localStorage.getItem(`userData-`+this.loginForm.value.username)).pass);
      if (localData) {
        if (localData.password == this.loginForm.value.password ) {
          this.router.navigate(['/home']);
       } else { 
          this.inValidUser = true;
       }
      } else { 
          this.noUserFound = true;
     }
    }
  }

}


