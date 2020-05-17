import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean;
  rememberLogin: boolean;
  loginForm: FormGroup;
  constructor(public router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  onLogin(event: Event): void {
    event.preventDefault();
    this.isLoading = true;
    console.log(this.loginForm);
  }

  gotoRegister(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['store', 'auth', 'sign-up']);
  }
}
