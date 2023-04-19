import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-drug-registration',
  templateUrl: './drug-registration.component.html',
  styleUrls: ['./drug-registration.component.css'],
})
export class DrugRegistrationComponent implements OnInit {
  formulario!: FormGroup;

  showForm = false;

  paciente = {
    nome: '',
  };

  tiposMedicamento = [
    'Cápsula',
    'Comprimido',
    'Líquido',
    'Creme',
    'Gel',
    'Inalação',
    'Injeção',
    'Spray',
  ];

  unidades = ['mg', 'mcg', 'g', 'mL', '%'];

  listaPacientes: any = [];

  pacienteEscolhido: any = {};

  resultadosDaBusca: any = [];

  constructor(private fb: FormBuilder, private storage: LocalStorageService) {
    this.storage.getStorage('pacientes')
      ? (this.listaPacientes = this.storage.getStorage('pacientes'))
      : [];
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nomeMedicamento: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(80),
          ],
        },
      ],
      data: [
        new Date().toISOString().substring(0, 10),
        {
          validators: [Validators.required],
        },
      ],
      horario: [
        new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
        {
          validators: [Validators.required],
        },
      ],
      tipo: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      quantidade: [
        '',
        {
          validators: [Validators.required, Validators.min(0.01)],
        },
      ],
      unidade: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      observacoes: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8000),
          ],
        },
      ],
    });
  }

  messageError() {
    const controlesInvalidos: any = [];
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
  }
  onSubmit(): void {
    console.log(this.formulario.value);
    
    if (this.formulario.invalid) {
      this.messageError();
    } else {
      const cadastroMedicamento = {
        id: uuidv4(),
        ...this.formulario.value,
      };

      this.pacienteEscolhido.medicamentos.push(cadastroMedicamento);
      const pacienteMedicado = this.pacienteEscolhido;

      const newArray = this.listaPacientes.map((obj: any) => {
        if (obj.id === pacienteMedicado.id) {
          return pacienteMedicado;
        }
        return obj;
      });

      this.storage.setStorage('pacientes', newArray);
      console.log(this.storage.getStorage('pacientes'));

      this.formulario.reset('');
    }
  }
  listarPacientes(array: any[] = this.listaPacientes) {
    this.resultadosDaBusca = array;
  }
  buscaPacientePeloNome() {
    const pacientesEncontrados = this.pesquisarPaciente(
      this.listaPacientes,
      this.paciente.nome
    );
    this.listarPacientes(pacientesEncontrados);
  }
  pesquisarPaciente = (pacientes: any[], termo: string) => {
    return pacientes.filter((paciente: any) => {
      const nomeMinusculo = paciente.nomeCompleto.toLowerCase();
      const termoMinusculo = termo.toLowerCase();
      return nomeMinusculo.includes(termoMinusculo);
    });
  };
  createForm(obj: any) {
    console.log(obj);
    this.pacienteEscolhido = obj;

    this.showForm = true;
  }
}
