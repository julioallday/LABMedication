import { LocalStorageService } from './../shared/services/local-storage.service';
import { AccessLoginService } from './../shared/services/access-login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  login = {
    email: '',
    senha: '',
  };
  users: any = []
  constructor(private storage: LocalStorageService, private router: Router) {}

  ngOnInit() {
    const localData = this.storage.getStorage('users');
    if (localData != null) {
      this.users = localData;
    }
  }

  signIn() {
    const isUserExist = this.users.some((e: any) => e.email == this.login.email && e.password == this.login.senha)
    if (isUserExist) {
      alert("Login efetuado com sucesso!")
      this.router.navigate(['home'])
    } else {
      alert("Dados incorretos.")
    }
}
}
