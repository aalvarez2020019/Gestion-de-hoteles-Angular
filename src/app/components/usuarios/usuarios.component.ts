import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [ UsuariosService ]

})
export class UsuariosComponent implements OnInit {
  // importaciones rol usuario
  public usuariosModelGet: Usuarios;
  public usuariosModelGetId: Usuarios;

  // importaciones rol admin hotel
  public usuariosGetHotel: Usuarios;
  public usuariosModelPost: Usuarios;



  public token;



  constructor(private _usuarioService: UsuariosService, private _router: Router) {
    this.usuariosModelPost = new Usuarios('', '', '', '', '', '', '');
    this.usuariosModelGetId = new Usuarios('', '', '', '', '', '', '');

    this.token = this._usuarioService.obtenerToken();
  }

  // buscar rol_usuario
  getUsuarios(){
    this._usuarioService.obtenerUsuarios(this._usuarioService.obtenerToken()).subscribe(

     (response) => {
       this.usuariosModelGet = response.Usuarios;
       console.log(this.usuariosModelGet);
     },


    )
   }

   // buscar usuarios admin hotel
   getUsuariosAdminHotel(){
    this._usuarioService.obtenerUsuariosAdminHotel(this._usuarioService.obtenerToken()).subscribe(

     (response) => {

       this.usuariosGetHotel = response.AdminApp;
       console.log(this.usuariosGetHotel);
     },


    )
   }

   // Agregar admin hotel
   postAdminAgregar(){
    this._usuarioService.agregarAdminHotel(this.usuariosModelPost, this._usuarioService.obtenerToken()).subscribe(

      (response)=>{
        console.log(response);
        this.getUsuariosAdminHotel();

      (error)=>{
        console.log(error)

      }


    }
  )
  }

  // Buscar por el id
  getUsuariosId(idUsuario){

    this._usuarioService.obtenerUsuariosId(idUsuario, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.usuariosModelGetId = response.AdminApp;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

  // Editar usuarios
  putUsuarios(){
    this._usuarioService.editarUsuarios(this.usuariosModelGetId, this.token).subscribe(
      (response)=>{

        console.log(response);

        this.getUsuarios();


      },


    )
  }

  // Obtener id admin hotel
  getUsuariosIdAdminHotel(idUsuario){

    this._usuarioService.obtenerIdAdminHotel(idUsuario, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.usuariosModelGetId = response.AdminApp;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

  // editar rol admin hotel
  putRolAdminHotel(){
    this._usuarioService.editarRolAdminHotel(this.usuariosModelGetId, this.token).subscribe(

      (response)=>{

        console.log(response);

        this.getUsuariosAdminHotel();


      },


    )
  }

  // eliminar usuarios
  eliminarUsuarios(id){
    this._usuarioService.eliminarUsuarios(id, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getUsuarios();


      },
      (error)=>{
        console.log(error)

    }
    )
  }

  hotelAdminEliminar(id){
    this._usuarioService.eliminarAdminHotel(id, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getUsuariosAdminHotel();


      },
      (error)=>{
        console.log(error)

    }
    )
  }




  ngOnInit(): void {

    this.getUsuarios();
    this.getUsuariosAdminHotel();
  }

}
