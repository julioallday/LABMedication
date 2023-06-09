import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { DrugRegistrationComponent } from './drug-registration/drug-registration.component';
import { MedicationHistoryListingComponent } from './medication-history-listing/medication-history-listing.component';
import { PatientMedicationHistoryComponent } from './patient-medication-history/patient-medication-history.component';
import { LoginComponent } from './login/login.component';
import { CadastroContaComponent } from './shared/components/cadastro-conta/cadastro-conta.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { MenuLateralComponent } from './shared/components/menu-lateral/menu-lateral.component';
import { SidebarModule } from 'primeng/sidebar';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AvatarModule } from 'primeng/avatar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientRegistrationComponent,
    DrugRegistrationComponent,
    MedicationHistoryListingComponent,
    PatientMedicationHistoryComponent,
    LoginComponent,
    CadastroContaComponent,
    MenuLateralComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CheckboxModule,
    InputTextModule,
    CardModule,
    StyleClassModule,
    ButtonModule,
    PasswordModule,
    ReactiveFormsModule,
    InputMaskModule,
    ToastModule,
    SidebarModule,
    ProgressSpinnerModule,
    AvatarModule,
    InputNumberModule,
    DropdownModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
