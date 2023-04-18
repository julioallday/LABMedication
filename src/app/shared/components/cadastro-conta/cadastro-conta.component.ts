import { AccessLoginService } from './../../services/access-login.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css'],
})
export class CadastroContaComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.minLength(10), Validators.required]),
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
  objSignUp: any = {
    email: '',
    pasword: '',
  };

  constructor(private accessService: AccessLoginService) {
    this.accessService.getStorage('users')
      ? (this.users = this.accessService.getStorage('users'))
      : [];
  }

  registerUser() {
    if (this.form.valid) {
     this.objSignUp = {
       email: this.form.get('email') ? this.form.get('email')!.value : '',
       password: this.form.get('password')
         ? this.form.get('password')!.value
         : '',
     };
     this.users.push(this.objSignUp);
     this.accessService.setStorage('users', JSON.stringify(this.users));
     this.form.get('email')?.reset('');
     this.form.get('password')?.reset('');
     this.form.get('confirmPassword')?.reset('');   
    }
   
  }
}
