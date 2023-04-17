import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { DrugRegistrationComponent } from './drug-registration/drug-registration.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'listagem-historico-medicacao',
    loadChildren: () =>
      import('./medication-history-listing/medication-history.module').then(
        (m) => m.MedicationHistoryModule
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro-conta',
    component: CadastroContaComponent,
  },
  {
    path: 'cadastro-pacientes',
    component: PatientRegistrationComponent,
  },
  {
    path: 'cadastro-medicamentos',
    component: DrugRegistrationComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
