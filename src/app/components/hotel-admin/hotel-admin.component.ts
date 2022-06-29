import { Component, OnInit } from '@angular/core';
import { Hoteles } from 'src/app/models/hoteles.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';


@Component({
  selector: 'app-hotel-admin',
  templateUrl: './hotel-admin.component.html',
  styleUrls: ['./hotel-admin.component.scss'],
  providers: [HotelesService]
})
export class HotelAdminComponent implements OnInit {
  public hotelesModelGet: Hoteles;
  public hotelesModelPost: Hoteles;
  public token;

  constructor(
    public _hotelesService: HotelesService,
    public _activatedRoute: ActivatedRoute
  ) {

    this.hotelesModelPost = new Hoteles('', '', '', '', '', '', '');
    this.token = this._hotelesService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idUser'));

      this.getHotelesAdmin(dataRuta.get('idUser'))

    })
  }

  getHotelesAdmin(idUsuario){
    this._hotelesService.obtenerHotelesAdmin(idUsuario, this.token).subscribe(

      (response)=>{
        this.hotelesModelGet = response.AdminApp;

        console.log(this.hotelesModelGet)
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };



  HotelAgregar(){
    this._hotelesService.agregarHotel(this.hotelesModelPost, this._hotelesService.obtenerToken()).subscribe(

      (response)=>{
        console.log(response);

      (error)=>{
        console.log(error)

      }


    }
  )
  }




}
