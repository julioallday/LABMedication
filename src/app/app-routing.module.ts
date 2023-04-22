import { AccessGuard } from './shared/guards/access.guard';
import { DrugRegistrationComponent } from './drug-registration/drug-registration.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { LoginComponent } from './login/login.component';
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
    canActivate: [AccessGuard],
    data: { title: 'Estatísticas e informações' },
  },
  {
    path: 'listagem-historico-medicacao',
    loadChildren: () =>
      import('./medication-history-listing/medication-history.module').then(
        (m) => m.MedicationHistoryModule
      ),
    canActivate: [AccessGuard],
    data: { title: 'Listagem de Histórico de Medicação' },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro-pacientes',
    component: PatientRegistrationComponent,
    canActivate: [AccessGuard],
    data: { title: 'Cadastro de Paciente' },
  },
  {
    path: 'cadastro-medicamentos',
    component: DrugRegistrationComponent,
    canActivate: [AccessGuard],
    data: { title: 'Cadastro de Medicamento' },
  },
  {
    path: 'cadastro-medicamentos/:id',
    component: DrugRegistrationComponent,
    canActivate: [AccessGuard],
    data: { title: 'Cadastro de Medicamento' },
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
