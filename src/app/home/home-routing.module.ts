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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class HomeRoutingModule {}
