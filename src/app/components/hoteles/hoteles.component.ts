import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hoteles } from 'src/app/models/hoteles.model';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss'],
  // providers: [HotelesService]
})
export class HotelesComponent implements OnInit {

  // public hotelesModel: Hoteles;
  // public token;


  constructor(
    // private _hotelesService: HotelesService,
    // private _router: Router
  ) {
    // this.hotelesModel = new Hoteles('', '', '', '', '');
    // this.token = this._hotelesService.obtenerToken();

  }

  /* getHoteles(){

    this._hotelesService.obtenerHoteles(this._hotelesService.obtenerToken()).subscribe(
     (response) => {
       this.hotelesModel = response.AdminApp;
       console.log(response);
     },
     (error) => {
       console.log(<any>error)

     }
    )
  } */




  ngOnInit(): void {
    // this.getHoteles();

  }

}
