import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'add-client', component: AddClientComponent},
  { path: 'client-details/:id', component: ClientDetailsComponent},
  { path: 'edit-client/:id', component: EditClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }