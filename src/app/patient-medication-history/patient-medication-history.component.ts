import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-medication-history',
  templateUrl: './patient-medication-history.component.html',
  styleUrls: ['./patient-medication-history.component.css'],
})
export class PatientMedicationHistoryComponent {
  listaPacientes: any = [];
  paciente: any = {};
  historico: any = [];

  constructor(
    private route: ActivatedRoute,
    private storage: LocalStorageService
  ) {
    this.getPatientById();
  }
  getPatientById() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.storage.getStorage('pacientes')
        ? (this.listaPacientes = this.storage.getStorage('pacientes'))
        : [];
      this.paciente = this.listaPacientes.find((el: any) => el.id == id) || {};
      this.historico = this.paciente.medicamentos;
    });
  }
  
}
