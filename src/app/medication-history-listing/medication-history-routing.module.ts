import { PatientMedicationHistoryComponent } from './../patient-medication-history/patient-medication-history.component';
import { MedicationHistoryListingComponent } from './medication-history-listing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MedicationHistoryRoutingModule {}
