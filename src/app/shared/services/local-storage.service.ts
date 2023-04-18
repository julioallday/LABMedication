import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  getStorage(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }
  setStorage(key: string, value: string) {
    return JSON.stringify(localStorage.setItem(key, value));
  }
}
