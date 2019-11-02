import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './core/signup/signup.component';
import {LoginComponent} from './core/login/login.component';

const routes: Routes = [
  {path:'',
  // canActivate:[MyGuard],
  component:LoginComponent},
  {path:'register',
  component:RegisterComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent];