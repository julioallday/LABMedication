import { LocalStorageService } from './shared/services/local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  pacientes: any[];

  constructor(private storage: LocalStorageService) {
    this.pacientes = storage.getStorage('pacientes')
      ? storage.getStorage('pacientes')
      : [];
  }

  getPacientes() {
    return this.pacientes;
  }

  getPaciente(id: number) {
    return this.pacientes.find((paciente) => paciente.id === id);
  }

  getQuantidadePacientes() {
    return this.pacientes.length;
  }

  getQuantidadeMedicamentos() {
    let incremento = 0
    this.pacientes.map((paciente: any) => {
     incremento += paciente.medicamentos.length
    });
    return incremento;
  }

  adicionarPaciente(paciente: any) {
    this.pacientes.push(paciente);
  }

  atualizarPaciente(id: number, paciente: any) {
    const index = this.pacientes.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.pacientes[index] = paciente;
    }
  }

  excluirPaciente(id: number) {
    const index = this.pacientes.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.pacientes.splice(index, 1);
    }
  }
}
