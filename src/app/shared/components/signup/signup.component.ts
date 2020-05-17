import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  isLoading: boolean;
  signUpForm: FormGroup;
  constructor(public router: Router, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]),
      mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]),
      emailAddress: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  onSignUp(event: Event): void {
    event.preventDefault();
    this.isLoading = true;
    this.messageService.success("Sign Up");
  }

  gotoLogin(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['store', 'auth', 'login'])
  }

}