import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HotelAdminComponent } from './components/hotel-admin/hotel-admin.component';
import { VistaAdminHotelComponent } from './components/vista-admin-hotel/vista-admin-hotel.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { VermodaladminhotelComponent } from './components/vermodaladminhotel/vermodaladminhotel.component';


const routes: Routes = [


  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'usuarios', component: UsuariosComponent},


  { path: 'hotelAdmin/:idUser', component: HotelAdminComponent},

  { path: 'vista-admin-hotel', component: VistaAdminHotelComponent},

  { path: 'vistaUsuario', component: VistaUsuarioComponent},

  { path: 'modalAdminHotel/:idHotel', component: VermodaladminhotelComponent},


  { path: "**", component: LoginComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
