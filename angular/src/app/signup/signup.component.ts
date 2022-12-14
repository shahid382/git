import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder,
    private myhttp: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      mobileNumber: [''],
      email: [''],
      password: ['']
    });
  }
  signUp() {
    this.myhttp.post<any>("https://localhost:44312/api/user/register", this.signupForm.value).subscribe(res => {
      alert("Registration Succesfully");
      this.signupForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("Something went wrong");
    })
  }
}
