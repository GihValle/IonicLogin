import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
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

 postCliente(form: any){
  //Constrói o caminho final = localhost + parâmetros
  const endpoint = this._url

  //Retorna os dados da Api_back
  //JSON.Stringify = transforma o formulário HTML em JSON
  return this._httpClient.post(endpoint, JSON.stringify(form), this._httpOptions)
 }
}
