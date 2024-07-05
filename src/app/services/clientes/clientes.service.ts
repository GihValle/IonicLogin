import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private _url: string = "https://g1a.com.br/fashion/api/clientes/"

  private _httpOptions = {
    headers: new  HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': '77cbc1f93d7f'
    })
  }

  constructor(
    private _httpClient: HttpClient
  ) { }

 getCliente(pk_cliente: any){
  //Constrói o caminho final = localhost + parâmetros
  const endpoint = this._url + '?id=' + pk_cliente

  //Retorna os dados da Api_back
  return this._httpClient.get(endpoint, this._httpOptions)
 }

 putCliente(form: any){
  //Constrói o caminho final = localhost + parâmetros
  const endpoint = this._url

  //Retorna os dados da Api_back
  return this._httpClient.put(endpoint, JSON.stringify(form),this._httpOptions)
 }
}
