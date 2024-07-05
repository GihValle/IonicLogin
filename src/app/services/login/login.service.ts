import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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

  getLogin(email: string, password:string) {

    const endpoint = this._url  + "?email=" + email + "&senha=" + btoa(password)

    return this._httpClient.get(endpoint, this._httpOptions)
  }
}
