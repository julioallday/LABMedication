import { Router } from '@angular/router';
import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-medication-history-listing',
  templateUrl: './medication-history-listing.component.html',
  styleUrls: ['./medication-history-listing.component.css'],
})
export class MedicationHistoryListingComponent {
  pacientes: any = [];
  resultadosDaBusca: any = [];
  paciente: any = {
    nome: '',
  };

  constructor(private storage: LocalStorageService, private router: Router) {
    this.storage.getStorage('pacientes')
      ? (this.pacientes = this.storage.getStorage('pacientes'))
      : [];
    this.listarPacientes();
  }

  verDetalhes(obj: any) {
  }
  listarPacientes(array: any[] = this.pacientes) {
    this.resultadosDaBusca = array;
  }
  buscaPacientePeloNome() {
    if (!this.paciente.nome) {
      this.listarPacientes();
    } else {
      const pacientesEncontrados = this.pesquisarPaciente(
        this.pacientes,
        this.paciente.nome
      );
      this.listarPacientes(pacientesEncontrados);
    }
  }
  pesquisarPaciente = (pacientes: any[], termo: string) => {
    return pacientes.filter((paciente: any) => {
      const nomeMinusculo = paciente.nomeCompleto.toLowerCase();
      const termoMinusculo = termo.toLowerCase();
      return nomeMinusculo.includes(termoMinusculo);
    });
  };
}
