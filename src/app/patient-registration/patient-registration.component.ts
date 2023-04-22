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
  url!:string

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
      rgOrgaoExpedidor: ['',  [Validators.required, Validators.maxLength(20)]],
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
     const paciente = this.pacientes.find((el: any) => {
       return el.id === params.id
     })
      console.log(paciente);
      if (params) {
        this.formulario.get('nomeCompleto')?.setValue(paciente.nomeCompleto)
        this.formulario.get('genero')?.setValue(paciente.genero)
        this.formulario.get('dataNascimento')?.setValue(paciente.dataNascimento)
        this.formulario.get('cpf')?.setValue(paciente.cpf)
        this.formulario.get('rgOrgaoExpedidor')?.setValue(paciente.rgOrgaoExpedidor)
        this.formulario.get('estadoCivil')?.setValue(paciente.estadoCivil)
        this.formulario.get('telefone')?.setValue(paciente.telefone)
        this.formulario.get('email')?.setValue(paciente.email)
        this.formulario.get('naturalidade')?.setValue(paciente.naturalidade)
        this.formulario.get('contatoEmergencia')?.setValue(paciente.contatoEmergencia)
        this.formulario.get('alergias')?.setValue(paciente.alergias)
        this.formulario.get('cuidadosEspecificos')?.setValue(paciente.cuidadosEspecificos)
        this.formulario.get('convenio')?.setValue(paciente.convenio)
        this.formulario.get('numeroConvenio')?.setValue(paciente.numeroConvenio)
        this.formulario.get('validadeConvenio')?.setValue(paciente.validadeConvenio)
        this.formulario.get('cep')?.setValue(paciente.cep)
        this.formulario.get('cidade')?.setValue(paciente.cidade)
        this.formulario.get('estado')?.setValue(paciente.estado)
        this.formulario.get('logradouro')?.setValue(paciente.logradouro)
        this.formulario.get('numero')?.setValue(paciente.numero)
        this.formulario.get('complemento')?.setValue(paciente.complemento)
        this.formulario.get('bairro')?.setValue(paciente.bairro)
        this.formulario.get('pontoReferencia')?.setValue(paciente.pontoReferencia)
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
      const cadastroPaciente = {
        id: uuidv4(),
        ...this.formulario.value,
        medicamentos: [],
      };
      this.pacienteService.adicionarPaciente(cadastroPaciente)
      this.formulario.reset('');
      location.reload()
    }
  }
  editar() {
    this.router.params.subscribe((params: any) => {
      const paciente = {
        ...this.formulario.value,
        id: params.id,
         medicamentos: [],
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
}
