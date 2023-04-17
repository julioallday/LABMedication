import { AccessLoginService } from './../shared/services/access-login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login = {
    email: '',
    senha: '',
  };
  constructor(private accessService: AccessLoginService, private router: Router) {}

  doLogin() {
    if (this.accessService.verifyAuth('access')) this.router.navigate(['']) 
      
  }
}
