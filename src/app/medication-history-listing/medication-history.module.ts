import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicationHistoryRoutingModule } from './medication-history-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [CommonModule, MedicationHistoryRoutingModule, FormsModule, ReactiveFormsModule],
})
export class MedicationHistoryModule {}
