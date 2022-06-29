import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { RolAdminAppComponent } from './components/rol-admin-app/rol-admin-app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { HotelAdminComponent } from './components/hotel-admin/hotel-admin.component';


const routes: Routes = [


  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'rolAdminApp', component: RolAdminAppComponent},
  { path: 'usuarios', component: UsuariosComponent},

  { path: 'hoteles/:idUsuario', component: HotelesComponent},

  { path: 'hotelAdmin/:idUser', component: HotelAdminComponent},

  { path: "**", component: LoginComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
