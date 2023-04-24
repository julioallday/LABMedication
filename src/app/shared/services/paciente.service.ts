import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

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

  getPaciente(id: string) {
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
    this.storage.setStorage("pacientes", this.pacientes)
  }

  atualizarPaciente(id: string, paciente: any) {
    const index = this.pacientes.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.pacientes[index] = paciente;
      this.storage.setStorage("pacientes", this.pacientes)
      return true;
    } else {
      return false;
    } 
  }

  excluirPaciente(id: string) {
    const index = this.pacientes.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.pacientes.splice(index, 1);
      this.storage.setStorage("pacientes", this.pacientes)
      return true;
    } return false;
  }
}
