import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../shared/services/paciente.service';

@Component({
  selector: 'app-drug-registration',
  templateUrl: './drug-registration.component.html',
  styleUrls: ['./drug-registration.component.css'],
})
export class DrugRegistrationComponent implements OnInit {
  formulario!: FormGroup;

  url!: string

  showForm = false;
  botaoEditar = false;
  botaoCadastrar = true;

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
  nomesDePacientes: any = [];

  constructor(private fb: FormBuilder, private storage: LocalStorageService, private router: ActivatedRoute, private pacienteService: PacienteService) {
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
    this.router.params.subscribe((params: any) => {
      this.url = params['id']
      const paciente = this.listaPacientes.find((el: any) => {
        if (el.medicamentos) {
        return el.medicamentos.find((el: any) => {
         return el.id === this.url
        })
        }
      })
     const medicamento = paciente.medicamentos.find((el: any) => {
        return el.id === this.url
      })
      if (params) {
        this.showForm = !this.showForm
        this.pacienteEscolhido = paciente
        this.formulario.get('nomeMedicamento')?.patchValue(medicamento.nomeMedicamento);
        this.formulario.get('data')?.setValue(medicamento.data);
        this.formulario.get('horario')?.setValue(medicamento.horario);
        this.formulario.get('tipo')?.setValue(medicamento.tipo);
        this.formulario.get('quantidade')?.setValue(medicamento.quantidade);
        this.formulario.get('unidade')?.setValue(medicamento.unidade);
        this.formulario.get('observacoes')?.setValue(medicamento.observacoes);

        this.botaoEditar = !this.botaoEditar
        this.botaoCadastrar = !this.botaoCadastrar
        }
    })
  }

  editar() {
   const medicamento = this.pacienteEscolhido.medicamentos.find((medicamento: any) => {
       return medicamento.id == this.url
   })
    console.log(medicamento);

    const paciente = this.listaPacientes.find((p: any) => p.id === this.pacienteEscolhido.id);
    console.log(paciente);
    
  if (!paciente) {
    throw new Error('Paciente não encontrado');
  }
  const medicamentoIndex = paciente.medicamentos.findIndex((m: any) => m.id === medicamento.id);
  if (medicamentoIndex === -1) {
    throw new Error('Medicamento não encontrado');
  }
    const novoMedicamento = {
      ...this.formulario.value,
      id: this.url
    }
    paciente.medicamentos[medicamentoIndex] = novoMedicamento;
    this.pacienteService.atualizarPaciente(paciente.id, paciente)
    location.reload()
    
  }
  excluir() {
  const paciente = this.listaPacientes.find((p: any) => p.id === this.pacienteEscolhido.id );
  if (!paciente) {
    throw new Error('Paciente não encontrado');
  }
  paciente.medicamentos = paciente.medicamentos.filter((m: any) => m.id !== this.url);

    this.pacienteService.atualizarPaciente(this.pacienteEscolhido.id, paciente)
    location.reload()
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
  cadastrar(): void {
    if (this.formulario.invalid) {
      this.messageError();
    } else {
      const cadastroMedicamento = {
        nomePaciente: this.pacienteEscolhido.nomeCompleto,
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
      location.reload()
    }
  }

  listarPacientes(array: any[] = this.listaPacientes) {
    this.resultadosDaBusca = array;
    this.nomesDePacientes = this.resultadosDaBusca.map((el:any)=> el.nomeCompleto)
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
