import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Habitaciones } from '../models/habitaciones.model';


@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  public url: String = 'http://localhost:3000/api';
    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


    public token;


  constructor(public _http: HttpClient) { }

  obtenerToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != undefined){
      this.token = token2;
    } else {
      this.token = '';
    }

    return this.token;
  }

  // obtener servicios
  obtenerHabitaciones(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerHabitaciones', { headers: headersToken});
  }


  // agregar habitaciones
  agregarHabitaciones(modeloHab: Habitaciones, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    let parametros = JSON.stringify(modeloHab);

    return this._http.post(this.url + '/registrarHabitaciones', parametros, {headers: headersToken});

  }

   // obtener reservaciones
   obtenerReservaciones(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verReservaciones', { headers: headersToken});
  }


}
