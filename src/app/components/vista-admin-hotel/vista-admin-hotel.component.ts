import { Component, OnInit } from '@angular/core';
import { Hoteles } from 'src/app/models/hoteles.model';
import { Servicios } from 'src/app/models/servicios.model';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { Eventos } from 'src/app/models/eventos.model';

// importacion services hoteles
import { AdminhotelesService } from 'src/app/services/adminhoteles.service';


// importacion services de servicios
import { ServiciosService } from 'src/app/services/servicios.service';

// importacion services habitaciones
import { HabitacionesService } from 'src/app/services/habitaciones.service';

// importacion services eventos
import { EventosService } from 'src/app/services/eventos.service';



@Component({
  selector: 'app-vista-admin-hotel',
  templateUrl: './vista-admin-hotel.component.html',
  styleUrls: ['./vista-admin-hotel.component.scss'],
  providers: [AdminhotelesService,
    ServiciosService,
    HabitacionesService,
    EventosService
  ]

})
export class VistaAdminHotelComponent implements OnInit {

  // hoteles
  public hotelesModelGet: Hoteles;

  // servicios
  public serviciosModelGet: Servicios;
  public serviciosModelPost: Servicios;
  public serviciosModelGetId: Servicios;

  // habitaciones
  public habitacionesModelGet: Habitaciones;
  public habitacionesModelPost: Habitaciones;

  // eventos
  public eventosModelGet: Eventos;
  public eventosModelPost: Eventos;

  public token;


  constructor(
    public _hotelesService: AdminhotelesService,
    public _serviciosService: ServiciosService,
    public _habitacionesService: HabitacionesService,
    public _eventosService: EventosService

  ) {

    // servicios
    this.serviciosModelPost = new Servicios('', '', '', '');
    this.serviciosModelGetId = new Servicios('', '', '', '');

    // habitaciones
    this.habitacionesModelPost = new Habitaciones('', '', '', '', 0, '', 0, 0, 0, '');

    // eventos
    this.eventosModelPost = new Eventos('', '', '', '');


    this.token = this._hotelesService.obtenerToken();
   }

//editar servicios
putServicios(){
  this._serviciosService.editarServicios(this._serviciosService, this.token).subscribe(

    (response)=>{
      console.log(response);

    },
    (error)=>{
      console.log(<any>error);

  }
  )
}

//eliminar servicios
eliminarProductos(id){
  this._serviciosService.eliminarServicios(id, this.token).subscribe(
    (response)=>{
      console.log(response);
      this.getServicios()
    },
    (error)=>{
      console.log(error)
  }
  )

}


// buscar rol_usuario
  getHoteles(){
  this._hotelesService.hotelesAdmin(this._hotelesService.obtenerToken()).subscribe(

   (response) => {
     this.hotelesModelGet = response.AdminApp;
     console.log(this.hotelesModelGet);
   },


  )
 }

 // obtener servicios

  getServicios(){
    this._serviciosService.obtenerServicios(this._serviciosService.obtenerToken()).subscribe(

      (response) => {

        this.serviciosModelGet = response.Usuario;

        console.log(this.serviciosModelGet);
      },


     )
  }

// agregar servicios
 postAgregarServicios(){
  this._serviciosService.agregarServicios(this.serviciosModelPost, this._serviciosService.obtenerToken()).subscribe(

    (response)=>{
      console.log(response);
      this.getServicios();

    (error)=>{
      console.log(error)

    }


  }
)
}

// get servicios id
getServiciosId(idServicio){

  this._serviciosService.obtenerServiciosId(idServicio, this.token).subscribe(

    (response)=>{
      console.log(response);

      this.serviciosModelGetId = response.Usuario;

    },

    (error)=>{
      console.log(error)

    }
  )
}

// get habitaciones
getHabitaciones(){
  this._habitacionesService.obtenerHabitaciones(this._habitacionesService.obtenerToken()).subscribe(

    (response) => {

      this.habitacionesModelGet = response.Usuario;

      console.log(this.habitacionesModelGet);
    },


   )
}

// agregar servicios
postAgregarhabitaciones(){
  this._habitacionesService.agregarHabitaciones(this.habitacionesModelPost, this._habitacionesService.obtenerToken()).subscribe(

    (response)=>{
      console.log(response);
      this.getHabitaciones();

    (error)=>{
      console.log(error)

    }


  }
)
}

// ver eventos
getEventos(){
  this._eventosService.obtenerEventos(this._eventosService.obtenerToken()).subscribe(

    (response) => {

      this.eventosModelGet = response.Usuario;

      console.log(this.eventosModelGet);
    },


   )
}


// agregar eventos

postAgregarEventos(){

  this._eventosService.agregarEventos(this.eventosModelPost, this._eventosService.obtenerToken()).subscribe(

    (response)=>{

      console.log(response);
      this.getEventos();

    (error)=>{
      console.log(error)

    }


  }
)
}


  ngOnInit(): void {
    this.getHoteles();
    this.getServicios();
    this.getHabitaciones();
    this.getEventos();
  }

}
