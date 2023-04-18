import { CepService } from './../shared/services/cep.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Endereco } from '../shared/models/Endereco.model';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
})
export class PatientRegistrationComponent {
  formulario: FormGroup;
  generos = ['Masculino', 'Feminino', 'Outro'];
  estadosCivis = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'];

  constructor(private fb: FormBuilder, private cep: CepService) {
    this.formulario = this.fb.group({
      nomeCompleto: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(80),
        ],
      ],
      genero: ['', Validators.required],
      dataNascimento: [
        '',
        Validators.required,
      ],
      cpf: [
        '',
        [
          Validators.required,
        ],
      ],
      rgOrgaoExpedidor: ['', Validators.required, Validators.maxLength(25)],
      estadoCivil: ['', Validators.required],
      telefone: [
        '',
        [
          Validators.required,
        ],
      ],
      email: ['', Validators.email],
      naturalidade: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      contatoEmergencia: [
        '',
        [
          Validators.required,
        ],
      ],
      alergias: [''],
      cuidadosEspecificos: [''],
      convenio: [''],
      numeroConvenio: [''],
      validadeConvenio: [''],
      cep: [''],
      cidade: [''],
      estado: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      pontoReferencia: [''],
    });
  }

  enviar() {
    console.log(this.formulario.value);
  }
  buscarCep() {
    const cepControl = this.formulario.get('cep')!;
    const cepValue = cepControl.value;
    const cepSemTracos = cepValue.replace(/-/g, '');
    if (cepSemTracos != undefined) {
      this.cep.buscarCep(cepSemTracos).subscribe((endereco: Endereco) => {
        this.formulario.patchValue({
          cep: endereco.cep,
          cidade: endereco.cidade,
          estado: endereco.estado,
          logradouro: endereco.logradouro,
          complemento: endereco.complemento,
          bairro: endereco.bairro,
          pontoReferencia: endereco.estado,
        });
      });
    }
  }
}
