import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from "../../../environments/environment"
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent implements OnInit {

  url:string = "";

  constructor(
    private http:HttpClient, 
    private route:Router
    ) { }

  ngOnInit(): void {
    /*if(localStorage.getItem("Sucursales") != undefined){
      this.url = environment.url;

      this.listaSucursalByIdRol();
    }else{
      this.route.navigate(['/restriccion']);
    }*/
    this.url = environment.url;
    //this.version();
  }

  version(){
    Swal.fire({title: 'Buscando version',text: 'Aguarde unos segundos . . .',allowOutsideClick: false,willOpen: () => {Swal.showLoading()}});

    let parametros = {
      "token": "224124124124"
    };

    this.http.post(this.url + "sistema/version", parametros, { observe: 'response' }).subscribe((response: HttpResponse<any>) => {
      Swal.close();
      if (response.status === 200) {
        let datosRecibido = response.body;
        if(datosRecibido["codigo"] === '0'){
          console.log(datosRecibido)
        }else{
          console.log(datosRecibido["mensaje"], datosRecibido["codigo"]);
        }
      } else {
        console.log('La solicitud no fue exitosa. Estado:', response.status);
      }
    },
    error => {
      Swal.close();
      console.log('Error en la solicitud:', error.status, error);
    });
  }
}
