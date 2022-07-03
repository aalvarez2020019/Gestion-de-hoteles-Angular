import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Servicios } from '../models/servicios.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  public url: String = 'http://localhost:3000/api';
    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
    public _id;
    public nombreServicio;
    public descripcionServicio;
    public hotel;


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
  obtenerServicios(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerServicios', { headers: headersToken});
  }

  // agregar servicios
  agregarServicios(modeloServ: Servicios, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    let parametros = JSON.stringify(modeloServ);

    return this._http.post(this.url + '/registrarServicios', parametros, {headers: headersToken});

  }

  // obtener servicios id
  obtenerServiciosId(idServicio, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerIdServicio/' + idServicio, { headers: headersToken})

  }

  eliminarServicios( idServicio, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarServicios/' +  idServicio, { headers: headersToken});

  }

  editarServicios(modeloServ: Servicios, token): Observable<any> {

    let parametros = JSON.stringify(modeloServ);

    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.put(this.url + '/editarServicios/' + modeloServ._id, parametros, { headers: headersToken})
  }


}
