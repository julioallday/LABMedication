import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { DrugRegistrationComponent } from './drug-registration/drug-registration.component';
import { MedicationHistoryListingComponent } from './medication-history-listing/medication-history-listing.component';
import { PatientMedicationHistoryComponent } from './patient-medication-history/patient-medication-history.component';
import { LoginComponent } from './login/login.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientRegistrationComponent,
    DrugRegistrationComponent,
    MedicationHistoryListingComponent,
    PatientMedicationHistoryComponent,
    LoginComponent,
    CadastroContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
