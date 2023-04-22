import { PatientMedicationHistoryComponent } from './../patient-medication-history/patient-medication-history.component';
import { MedicationHistoryListingComponent } from './medication-history-listing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegistrationComponent } from '../patient-registration/patient-registration.component';
import { DrugRegistrationComponent } from '../drug-registration/drug-registration.component';

const routes: Routes = [
  {
    path: '',
    component: MedicationHistoryListingComponent,
  },
  {
    path: 'detalhes-paciente/:id',
    component: PatientMedicationHistoryComponent,
    data: { title: 'Histórico de Medicação de Paciente' },
  },
  {
    path: 'home/cadastro-medicamentos/:id',
    component: DrugRegistrationComponent,
    data: { title: 'Cadastro de Medicamentos' },
  },
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MedicationHistoryRoutingModule {}
