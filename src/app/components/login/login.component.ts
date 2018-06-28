import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setMessage()
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out')
  }

  login() {
    this.authService.login()
    this.setMessage()
    this.router.navigate(['/admin'])
  }

  logout() {
    this.authService.logout()
    this.setMessage()
  }

}
