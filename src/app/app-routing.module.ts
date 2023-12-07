// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { EmpresasComponent } from './empresas/empresas.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AdministrarComponent } from './administrar/administrar.component';
import { PerfilEditarComponent } from './perfil-editar/perfil-editar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'perfil/editar', component: PerfilEditarComponent },
   { path: 'administrar', component: AdministrarComponent },
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
