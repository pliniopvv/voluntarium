import { Component } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private route: Router) {

  }

  private user = new User();

  setValue(e: String, field: String) {
    // @ts-ignore
    this.user[field] = e;
  }

  login() {
    this.route.navigate(['/home']);
  }
}
