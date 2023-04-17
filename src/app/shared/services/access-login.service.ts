import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessLoginService {
  hasUserLogin = false;


  verifyAuth(key: string) {
    const response = this.getStorage(key);
    if (response == null) {
      const authIsFalse = this.hasUserLogin;
      return authIsFalse;
    } else {
      const authIsTrue = !this.hasUserLogin;
      return authIsTrue;
    }
  }
  getStorage(key: string) {
    return localStorage.getItem(key);
  }
  SetStorage(key: string, value: string) {
    return localStorage.setItem(key, value);
  }
}
