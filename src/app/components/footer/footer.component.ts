import { Component, OnInit } from '@angular/core';
import { AppConfigClientService } from 'src/app/Client/app-config-client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private _AppConfigClient: AppConfigClientService
  ) { }

  version:string = "Error";

  ngOnInit(): void {
    this.ObtenerVersionAppEstable();
  }

  async ObtenerVersionAppEstable(){

    let dataResponse = await this._AppConfigClient.ObtenerVersionAppEstable({});

    if(dataResponse.statusCode != 200){
      console.log(dataResponse.message)
    }
    else{
      this.version = dataResponse.content.nombre;
    }


  }
}
