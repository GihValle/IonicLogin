import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private _url: string = "https://g1a.com.br/fashion/api/produtos/"

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
  const endpoint = this._url
  return this._httpClient.get(endpoint, this._httpOptions)
 }

 searchProdutosByName(nome: string){
  const endpoint = this._url + '?search=' + nome;
  return this._httpClient.get(endpoint, this._httpOptions);
 }
}
