import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-medication-history-listing',
  templateUrl: './medication-history-listing.component.html',
  styleUrls: ['./medication-history-listing.component.css'],
})
export class MedicationHistoryListingComponent {
  pacientes: any = [];

  constructor(private storage: LocalStorageService) {
    this.storage.getStorage('pacientes')
      ? (this.pacientes = this.storage.getStorage('pacientes'))
      : [];
  }

  verDetalhes(obj: any) {
    console.log(obj);
    
  }
}
