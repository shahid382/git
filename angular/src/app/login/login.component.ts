import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder,
    private myhttp: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
  login() {
    this.myhttp.post<any>("https://localhost:44312/api/user/register", this.loginForm.value).subscribe(res => {
      alert("Login Succesfully");
      this.loginForm.reset();
      this.router.navigate(['grocery'])
    },err=>{
      alert("Something went wrong");
    })
  }
}