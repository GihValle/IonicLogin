import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private _url: string = "http://localhost/api_back/produtos/"

  private _httpOptions = {
    headers: new  HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': '77cbc1f93d7f'
    })
  }

  constructor(
    private _httpClient: HttpClient
  ) { }

  getProduto(pk_produto: number){
    //CONSTRÓI O CAMINHO FINAL = localhost + parâmetros
    const endpoint = this._url + '?id=' + pk_produto
    //RETORNA OS DADOS DA API_BACK
    return this._httpClient.get(endpoint, this._httpOptions)
  }

 getProdutos(){
  //Constrói o caminho final = localhost + parâmetros
  const endpoint = this._url

  //Retorna os dados da Api_back
  return this._httpClient.get(endpoint, this._httpOptions)
 }
}
