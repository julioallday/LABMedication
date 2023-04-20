import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessLoginService {
  hasUserLogin = false;
  users: any[];
  constructor(private storage: LocalStorageService) {
    this.users = storage.getStorage('users')
      ? storage.getStorage('users')
      : [];
  }
  setLoggedIn(userInformations: any) {
     const user = this.users.find(
       (el: any) =>
         el.email == userInformations.email &&
         el.password == userInformations.senha
     );
     user.isLoggedIn = true;

     const newArray = this.users.map((obj: any) => {
       if (obj.id === user.id) {
         return user;
       }
       return obj;
     });
     this.storage.setStorage('users', newArray);
     this.storage.setStorage('sessionAuth', `${user.email}`);
     alert('Login efetuado com sucesso!');
  }

  get isLoggedIn() {
    return localStorage.getItem('sessionAuth') ? true : false;
  }
}
