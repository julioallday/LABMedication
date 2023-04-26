import { LocalStorageService } from './../shared/services/local-storage.service';
import { CepService } from './../shared/services/cep.service';
import { AsyncValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Endereco } from '../shared/models/Endereco.model';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../shared/services/paciente.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
})
export class PatientRegistrationComponent {

  formulario: FormGroup;
  botaoEditar = false
  botaoCadastrar = true;
  generos = ['Masculino', 'Feminino', 'Outro'];
  estadosCivis = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'];
  pacientes: any = [];
  url!: string
  paciente: any

  birthdate!: Date;
  age!: number;
  constructor(
    private fb: FormBuilder,
    private cep: CepService,
    private storage: LocalStorageService,
    private router: ActivatedRoute,
    private pacienteService: PacienteService
  ) {
    this.storage.getStorage('pacientes')
      ? (this.pacientes = this.storage.getStorage('pacientes'))
      : [];


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
      rgOrgaoExpedidor: ['', [Validators.required, Validators.maxLength(20)]],
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

    router.params.subscribe((params: any) => {
      this.paciente = this.pacientes.find((el: any) => {
        return el.id === params.id
      })
      console.log(this.paciente);
      if (params) {
        this.formulario.get('nomeCompleto')?.setValue(this.paciente.nomeCompleto)
        this.formulario.get('genero')?.setValue(this.paciente.genero)
        this.formulario.get('dataNascimento')?.setValue(this.paciente.dataNascimento)
        this.formulario.get('cpf')?.setValue(this.paciente.cpf)
        this.formulario.get('rgOrgaoExpedidor')?.setValue(this.paciente.rgOrgaoExpedidor)
        this.formulario.get('estadoCivil')?.setValue(this.paciente.estadoCivil)
        this.formulario.get('telefone')?.setValue(this.paciente.telefone)
        this.formulario.get('email')?.setValue(this.paciente.email)
        this.formulario.get('naturalidade')?.setValue(this.paciente.naturalidade)
        this.formulario.get('contatoEmergencia')?.setValue(this.paciente.contatoEmergencia)
        this.formulario.get('alergias')?.setValue(this.paciente.alergias)
        this.formulario.get('cuidadosEspecificos')?.setValue(this.paciente.cuidadosEspecificos)
        this.formulario.get('convenio')?.setValue(this.paciente.convenio)
        this.formulario.get('numeroConvenio')?.setValue(this.paciente.numeroConvenio)
        this.formulario.get('validadeConvenio')?.setValue(this.paciente.validadeConvenio)
        this.formulario.get('cep')?.setValue(this.paciente.cep)
        this.formulario.get('cidade')?.setValue(this.paciente.cidade)
        this.formulario.get('estado')?.setValue(this.paciente.estado)
        this.formulario.get('logradouro')?.setValue(this.paciente.logradouro)
        this.formulario.get('numero')?.setValue(this.paciente.numero)
        this.formulario.get('complemento')?.setValue(this.paciente.complemento)
        this.formulario.get('bairro')?.setValue(this.paciente.bairro)
        this.formulario.get('pontoReferencia')?.setValue(this.paciente.pontoReferencia)
        this.botaoEditar = !this.botaoEditar
        this.botaoCadastrar = !this.botaoCadastrar
      }
    })
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
      this.calculateAge(this.formulario.get('dataNascimento')?.value)
      const cadastroPaciente = {
        id: uuidv4(),
        ...this.formulario.value,
        medicamentos: [],
        idade: this.age
      };

      this.pacienteService.adicionarPaciente(cadastroPaciente)
      this.formulario.reset('');
      location.reload()
    }
  }
  editar() {
    this.router.params.subscribe((params: any) => {
      this.calculateAge(this.formulario.get('dataNascimento')?.value)
      const paciente = {
        ...this.formulario.value,
        id: params.id,
        medicamentos: this.paciente.medicamentos,
        idade: this.age
      }
      console.log(paciente);
      const resposta = this.pacienteService.atualizarPaciente(params.id, paciente)
      if (resposta) {
        alert(`Paciente ${paciente.nomeCompleto} editado com sucesso`)
      }
    })
  }
  excluir() {
    this.router.params.subscribe((params: any) => {
      const resposta = this.pacienteService.excluirPaciente(params.id)
      if (resposta) {
        alert(`Paciente deletado com sucesso`)
        this.formulario.reset()
      } else {
        alert("Falha ao deletar o paciente escolhido, tente novamente")
      }
    })
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

  calculateAge(dataNascimento: any): void {
    const today = new Date();
    const birthDate = new Date(dataNascimento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.age = age;
  }
}
