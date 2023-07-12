import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigClientService {

  url:string = "";

  constructor(private httpClient:HttpClient) {
    this.url = environment.url;
  }

  public async ObtenerVersionAppEstable(param: any): Promise<any> {
 
    const endpoint = this.url + "api/AppConfig/ObtenerVersionAppEstable";

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    try {
      const response = await this.httpClient.post(endpoint, { headers, param }).toPromise();
      return response;

    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
