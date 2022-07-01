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
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HotelAdminComponent } from './components/hotel-admin/hotel-admin.component';
import { VistaAdminHotelComponent } from './components/vista-admin-hotel/vista-admin-hotel.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { VermodaladminhotelComponent } from './components/vermodaladminhotel/vermodaladminhotel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    DashboardComponent,
    NavbarComponent,
    HeroDetailComponent,
    RegistrarComponent,
    UsuariosComponent,
    HotelAdminComponent,
    VistaAdminHotelComponent,
    VistaUsuarioComponent,
    VermodaladminhotelComponent,


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
