import { PatientRegistrationComponent } from './../patient-registration/patient-registration.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cadastro-pacientes/:id',
    component: PatientRegistrationComponent,

  },
  {
    path: 'home/cadastro-pacientes/:id',
    component: PatientRegistrationComponent,
    data: {
      title: 'Cadastro de Paciente'
    }
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class HomeRoutingModule { }
