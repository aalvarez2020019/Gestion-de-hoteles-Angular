import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { RolAdminAppComponent } from './components/rol-admin-app/rol-admin-app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { HotelAdminComponent } from './components/hotel-admin/hotel-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    DashboardComponent,
    NavbarComponent,
    HeroDetailComponent,
    RegistrarComponent,
    RolAdminAppComponent,
    UsuariosComponent,
    HotelesComponent,
    HotelAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
