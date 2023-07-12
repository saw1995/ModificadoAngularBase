import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioClientService } from 'src/app/Client/usuario-client.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _usuarioClient: UsuarioClientService, 
    public router: Router,
  ){ }

  usuario:string = "";
  password:string = "";

  ngOnInit(): void {
    if(localStorage.getItem("id_usuario") != undefined){
      this.router.navigate(['/']);
    }else{
    }
  }

  async LoginUsuarioByCiAndPass(){
    if(this.usuario == ""){
      Swal.fire({ icon: 'error', title: 'Validando Usuario', text: 'Introduzca el CI, por favor.', confirmButtonText: 'Ok' });
    }
    else if(this.password == ""){
      Swal.fire({ icon: 'error', title: 'Usuario Validando', text: 'Introduzca su Contraseña, por favor.', confirmButtonText: 'Ok' });
      this.password = '';
    }
    else{
      Swal.fire({ title: 'Cargando...', text: 'Validando datos de usuario', allowOutsideClick: false, showConfirmButton: false, willOpen: () => { Swal.showLoading(); }});
      
      let param = {
        'ci': this.usuario,
        'password': this.password,
        'dispositivo': 'web'
      };
      console.log(param)
      let validaDatosLogin = await this._usuarioClient.LoginUsuarioByCiAndPass(param);

      Swal.close();

      if(validaDatosLogin.statusCode != 200){
        Swal.fire({ icon: 'error', title: 'Datos Validado.', text: validaDatosLogin.message, confirmButtonText: 'Ok' });
      }
      else{
        this.router.navigate(['/']);
      }
    }
  }



}
