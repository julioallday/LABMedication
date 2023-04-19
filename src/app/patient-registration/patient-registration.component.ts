import { LocalStorageService } from './../shared/services/local-storage.service';
import { CepService } from './../shared/services/cep.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Endereco } from '../shared/models/Endereco.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
})
export class PatientRegistrationComponent {
  formulario: FormGroup;
  generos = ['Masculino', 'Feminino', 'Outro'];
  estadosCivis = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'];

  constructor(
    private fb: FormBuilder,
    private cep: CepService,
    private storage: LocalStorageService
  ) {
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
      dataNascimento: ['', Validators.required],
      cpf: ['', [Validators.required]],
      rgOrgaoExpedidor: ['', Validators.required, Validators.maxLength(20)],
      estadoCivil: ['', Validators.required],
      telefone: ['', [Validators.required]],
      email: ['', Validators.email],
      naturalidade: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      contatoEmergencia: ['', [Validators.required]],
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
    const controlesInvalidos: any = [];
    if (this.formulario.invalid) {
      for (const controlName in this.formulario.controls) {
        const control = this.formulario.controls[controlName];
        if (control.invalid) {
          controlesInvalidos.push({
            nomeDoCampo: controlName,
            erros: control.errors,
          });
        }
      }
      alert(JSON.stringify(controlesInvalidos));
    } else {
      const cadastroPaciente = {
        id: uuidv4(),
        ...this.formulario.value,
        medicamentos: []
      };
      this.storage.setStorage('pacientes', cadastroPaciente);
      console.log(this.storage.getStorage('pacientes'));
      this.formulario.reset('');
    }
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
