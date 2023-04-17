import { AccessGuard } from './shared/guards/access.guard';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
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
  },
  {
    path: 'listagem-historico-medicacao',
    loadChildren: () =>
      import('./medication-history-listing/medication-history.module').then(
        (m) => m.MedicationHistoryModule
      ),
    canActivate: [AccessGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro-conta',
    component: CadastroContaComponent,
    canActivate: [AccessGuard],
  },
  {
    path: 'cadastro-pacientes',
    component: PatientRegistrationComponent,
    canActivate: [AccessGuard],
  },
  {
    path: 'cadastro-medicamentos',
    component: DrugRegistrationComponent,
    canActivate: [AccessGuard],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
