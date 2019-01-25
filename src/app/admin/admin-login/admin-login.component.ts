import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {AuthenticateService} from '../__services/authenticate/authenticate.service';
import { Validators } from '@angular/forms';
import {bind} from '@angular/core/src/render3';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm
  loginError: boolean

  constructor(
    private auth: AuthenticateService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    //redirect if user is logged

    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/admin/home'])
    }
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.minLength(6)]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value)
    } else {
      this.loginError = true
      setTimeout(function () {
        this.loginError = false
      }.bind(this), 4000)

    }

    if (this.auth.logged === true) {
      this.router.navigate(['/admin/home'])
    }
  }

}
