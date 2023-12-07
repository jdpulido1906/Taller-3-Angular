import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpresasComponent } from './empresas/empresas.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilEditarComponent } from './perfil-editar/perfil-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministrarComponent } from './administrar/administrar.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [ AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    EmpresasComponent,
    MenuComponent,
    PerfilEditarComponent,
    AdministrarComponent,
    RegistrarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
