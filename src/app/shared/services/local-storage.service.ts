import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  getStorage(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }
  setStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  removeStorage(key: string) {
    localStorage.removeItem(key);
  }
}
