import { LocalStorageService } from './../../services/local-storage.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css'],
})
export class CadastroContaComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.minLength(10), Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(10),
      Validators.required,
    ]),
    confirmPassword: new FormControl('', [
      Validators.minLength(10),
      Validators.required,
    ]),
  });
  users: any[] = [];
  user: any = {
    email: '',
    pasword: '',
  };

  constructor(private storage: LocalStorageService) {
    this.storage.getStorage('users')
      ? (this.users = this.storage.getStorage('users'))
      : [];
  }

  registerUser() {
    if (this.form.valid) {
      this.user = {
        email: this.form.get('email') ? this.form.get('email')!.value : '',
        password: this.form.get('password')
          ? this.form.get('password')!.value
          : '',
        isLoggedIn: false
      };
      this.users.push(this.user);

      this.storage.setStorage('users', this.users);
      this.form.reset()
      alert("Cadastro efetuado com sucesso!")
    } else {
      alert("Cadastro inválido, tente novamente!")
    }

  }
}
