import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioClientService {

  url:string = "";

  constructor(private httpClient:HttpClient) {
    this.url = environment.url;
  }

  public async UsuarioById(id_usuario: any): Promise<any> {
 
    const endpoint = this.url + "api/Usuario/UsuarioById";

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    const params = {
      'idUsuario': id_usuario
    }

    try {
      const response = await this.httpClient.post(endpoint, { headers, params }).toPromise();
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async ListaUsuariosByEstado(estado: any): Promise<any> {
 
    const endpoint = this.url + "api/Usuario/ListaUsuariosByEstado";

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    const params = {
      'estado': estado
    }

    try {
      const response = await this.httpClient.post(endpoint, { headers, params }).toPromise();
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async AgregarNuevoUsuario(usuario: any): Promise<any> {
 
    const endpoint = this.url + "api/Usuario/AgregarNuevoUsuario";

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    const params = {
      'id': usuario.id,
      'ci': usuario.ci,
      'nombre': usuario.nombre,
      'apellidoPaterno': usuario.apellidoPaterno,
      'apellidoMaterno': usuario.apellidoMaterno,
      'direccion': usuario.direccion,
      'correo': usuario.correo,
      'celular': usuario.celular,
      'foto': usuario.foto,
      'password': usuario.password,
      'estado': usuario.estado
    }
  
    try {
      const response = await this.httpClient.post(endpoint, { headers, params }).toPromise();
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async ActualizarUsuarioById(param: any): Promise<any> {
 
    const endpoint = this.url + "api/Usuario/ActualizarUsuarioById";

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    const params = {
      'idUsuario': param.idUsuario,
      'nombre': param.nombre,
      'apellidoPaterno': param.apellidoPaterno,
      'apellidoMaterno': param.apellidoMaterno,
      'direccion': param.direccion,
      'correo': param.correo,
      'celular': param.celular
    }
  
    try {
      const response = await this.httpClient.post(endpoint, { headers, params }).toPromise();
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async ActualizarEstadoUsuarioById(param: any): Promise<any> {
 
    const endpoint = this.url + "api/Usuario/ActualizarEstadoUsuarioById";

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    const params = {
      'idUsuario': param.idUsuario,
      'estado': param.estado,
    }
  
    try {
      const response = await this.httpClient.post(endpoint, { headers, params }).toPromise();
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async ActualizarFotoUsuarioById(param: any): Promise<any> {
 
    const endpoint = this.url + "api/Usuario/ActualizarFotoUsuarioById";

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    const params = {
      'idUsuario': param.idUsuario,
      'base64': param.base64,
    }

    try {
      const response = await this.httpClient.post(endpoint, { headers, params }).toPromise();
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async ActualizarPasswordUsuarioById(param: any): Promise<any> {
 
    const endpoint = this.url + "api/Usuario/ActualizarPasswordUsuarioById";

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    const params = {
      'idUsuario': param.idUsuario,
      'password': param.password,
    }

    try {
      const response = await this.httpClient.post(endpoint, { headers, params }).toPromise();
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async LoginUsuarioByCiAndPass(param: any): Promise<any> {
 
    const endpoint = this.url + "api/Usuario/LoginUsuarioByCiAndPass";

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    const params = {
      'ci': param.ci,
      'password': param.password,
      'dispositivo': param.dispositivo
    }
  
    try {
      const response = await this.httpClient.post(endpoint, params).toPromise();
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async LoginUsuarioCerrarSessionById(param: any): Promise<any> {
 
    const endpoint = this.url + "api/Usuario/LoginUsuarioCerrarSessionById";

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    const params = {
      'idUsuario': param.idUsuario,
      'dispositivo': param.dispositivo,
    }
  
    try {
      const response = await this.httpClient.post(endpoint, { headers, params }).toPromise();
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }
  }


}
