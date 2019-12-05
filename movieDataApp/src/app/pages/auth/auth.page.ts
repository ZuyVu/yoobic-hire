import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLogin = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
    // Navigate user to movies page
    this.router.navigateByUrl('/movies');
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLogin) {
      // Send Login request
    } else {
      // Send Signup request
    }
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

}
