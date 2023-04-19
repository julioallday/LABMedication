import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  resultadosDaBusca: any = [];

  constructor(private fb: FormBuilder, private storage: LocalStorageService) {
    this.listaPacientes.push(storage.getStorage('pacientes') || []);
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
        new Date(),
        {
          validators: [Validators.required],
        },
      ],
      horario: [
        new Date(),
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
          validators: [
            Validators.required,
            Validators.pattern(/^\d+\.\d{2}$/),
            Validators.min(0.01),
          ],
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
  get f() {
    return this.formulario.controls;
  }
  onSubmit(): void {
    console.log(this.formulario.value);
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
}
