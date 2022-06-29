import { Component, OnInit } from '@angular/core';
import { AdminhotelesService } from 'src/app/services/adminhoteles.service';
import { Hoteles } from 'src/app/models/hoteles.model';


@Component({
  selector: 'app-vista-admin-hotel',
  templateUrl: './vista-admin-hotel.component.html',
  styleUrls: ['./vista-admin-hotel.component.scss'],
  providers: [AdminhotelesService]

})
export class VistaAdminHotelComponent implements OnInit {

  public hotelesModelGet: Hoteles;


  public token;


  constructor(
    public _hotelesService: AdminhotelesService
  ) {
    this.token = this._hotelesService.obtenerToken();
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

  ngOnInit(): void {
    this.getHoteles();
  }

}
