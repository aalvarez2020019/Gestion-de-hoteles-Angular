import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
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
import { VermodalusuariosComponent } from './components/vermodalusuarios/vermodalusuarios.component';
import { VistageneralComponent } from './components/vistageneral/vistageneral.component';
import { ChartsModule } from '@rinminase/ng-charts';
import { VistahabitacionesadminComponent } from './components/vistahabitacionesadmin/vistahabitacionesadmin.component';
import { VistareservacionesadminComponent } from './components/vistareservacionesadmin/vistareservacionesadmin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    HeroDetailComponent,
    RegistrarComponent,
    UsuariosComponent,
    HotelAdminComponent,
    VistaAdminHotelComponent,
    VistaUsuarioComponent,
    VermodaladminhotelComponent,
    VermodalusuariosComponent,
    VistageneralComponent,
    VistahabitacionesadminComponent,
    VistareservacionesadminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
