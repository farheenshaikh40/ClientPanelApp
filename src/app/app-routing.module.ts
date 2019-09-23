import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { AuthGuard } from './guard/auth.guard';
import { RegisterGuard } from './guard/register.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate:[RegisterGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'add-client', component: AddClientComponent, canActivate:[AuthGuard]},
  { path: 'client-details/:id', component: ClientDetailsComponent,canActivate:[AuthGuard]},
  { path: 'edit-client/:id', component: EditClientComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }