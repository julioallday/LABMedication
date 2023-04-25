import { LocalStorageService } from './../shared/services/local-storage.service';
import { AccessLoginService } from './../shared/services/access-login.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    senha: '',
  };
  users: any = [];

  title = 'login';
  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private accessService: AccessLoginService
  ) {
    
  }

  ngOnInit() {
    const localData = this.storage.getStorage('users');
    if (localData != null) {
      this.users = localData;
    }
  }

  signIn() {
    const isUserExist = this.users.some(
      (e: any) => e.email == this.login.email && e.password == this.login.senha
    );

    if (isUserExist) {
      this.accessService.setLoggedIn(this.login);
      setTimeout(() => {
        this.router.navigate(['home']);
        
      }, 1000);
    } else {
      alert('Dados incorretos.');
    }
  }
  esqueceuASenha() {
    window.alert('Funcionalidade em construção..')
  }
}
