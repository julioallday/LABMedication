import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessLoginService {
  hasUserLogin = false;
constructor(private storage: LocalStorageService) {
  
}
  verifyAuth(key: string) {
    const response = this.storage.getStorage(key);
    if (response == null) {
      const authIsFalse = this.hasUserLogin;
      return authIsFalse;
    } else {
      const authIsTrue = !this.hasUserLogin;
      return authIsTrue;
    }
  }

}
