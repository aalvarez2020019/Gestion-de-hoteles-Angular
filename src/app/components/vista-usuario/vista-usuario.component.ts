import { Component, OnInit } from '@angular/core';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { Reservaciones } from 'src/app/models/reservaciones.model';
import { RolusuarioService } from 'src/app/services/rolusuario.service';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.scss'],
  providers: [RolusuarioService]
})
export class VistaUsuarioComponent implements OnInit {

  public habitacionesModelGet: Habitaciones;

  public token;

  public reservaModel: Reservaciones

  constructor(
    public _reservacionService: RolusuarioService,

  ) {
    this.token = this._reservacionService.obtenerToken();
    this.reservaModel = new Reservaciones('', '', '', '', '');

   }

  ngOnInit(): void {
    this.getHabitaciones();
  }

  // obtener servicios

  getHabitaciones(){
    this._reservacionService.verHabitaciones(this._reservacionService.obtenerToken()).subscribe(

      (response) => {

        this.habitacionesModelGet = response.Usuario;

        console.log(this.habitacionesModelGet);
      },


     )
  }

  reservar(id) {
    this._reservacionService.reservar(this.reservaModel, id).subscribe((response) => {

        console.log(response);
        this.getHabitaciones();

      });
  }



}
