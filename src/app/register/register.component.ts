import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  existingNames;
  check: boolean = false;
  userCheck;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    console.log('active link...',this.router.url);
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.signupForm.controls; }

  resetForm() {
    this.check = false;
    this.signupForm.reset();
  }

  onSubmit() {
    this.check = true;
    this.existingNames = Object.keys(localStorage);
    this.userCheck = JSON.stringify(this.existingNames).includes(
      this.signupForm.value.username
    );
    if (this.userCheck) {
      console.log('UserNae alrdy exists.......',this.signupForm.valid);
      return;
    } else {
      if (this.signupForm.valid) {
        this.router.navigate(['/login']);
        console.log("For data.........", this.signupForm.value);
      console.log("Keys of local storage.......", Object.keys(localStorage));
      localStorage.setItem(
        `userData-` + this.signupForm.value.username,
        JSON.stringify(this.signupForm.value)
      );
      }
    }
  }
}
