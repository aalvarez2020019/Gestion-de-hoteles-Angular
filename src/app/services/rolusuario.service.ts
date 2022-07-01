import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Reservaciones } from '../models/reservaciones.model';
import { Habitaciones } from '../models/habitaciones.model';

@Injectable({
  providedIn: 'root'
})
export class RolusuarioService {

  public url: String = 'http://localhost:3000/api';
  
    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

    public headersToken = this.headersVariable.set('Authorization',this.obtenerToken());

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

  verHabitaciones(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verHabitaciones', { headers: headersToken});
  }

  reservar(reservaciones: Reservaciones, id): Observable<any> {
    let params = JSON.stringify(reservaciones);
    return this._http.post(this.url + '/reservar/' + id, params, {headers: this.headersToken,});
  }




}
