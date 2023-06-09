import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../shared/services/paciente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  quantidadePacientes!: number;
  quantidadeMedicamentos!: number;
  termoBusca!: string;
  pacientes: any = [];
  resultadosDaBusca: any = [];

  searchOption = 'nomeCompleto';
  searchValue!: string;
  carregando = true;



  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.carregarDados()
  }
  search() {
    if (this.searchValue == "") {
      this.listarPacientes()
    } else {
      const filteredPatients = this.pacientes.filter((paciente: any) => {
        if (
          paciente[this.searchOption] !== null &&
          paciente[this.searchOption] !== undefined
        ) {
          const termoPesquisadoMinusculo =
            paciente[this.searchOption].toLowerCase();
          return termoPesquisadoMinusculo.includes(
            this.searchValue.toLowerCase()
          );
        }
        return false;
      });

      console.log(filteredPatients);
      this.listarPacientes(filteredPatients);
    }
  }
  verDetalhes(obj: any) {
    console.log(obj);
  }
  listarPacientes(array: any[] = this.pacientes) {
    this.resultadosDaBusca = array;
  }
  carregarDados() {
    setTimeout(() => {
      this.quantidadePacientes = this.pacienteService.getQuantidadePacientes();
      this.quantidadeMedicamentos =
        this.pacienteService.getQuantidadeMedicamentos();
      this.pacientes = this.pacienteService.getPacientes();
      this.listarPacientes()
      this.carregando = false;
    }, 2000);
  }

}
