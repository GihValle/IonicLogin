import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { ProdutosService } from '../../services/produtos/produtos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {
  inputSelect: boolean = false;
  inputValue: string = '';

  public nome_cliente = window.localStorage.getItem('nome_cliente')
  public banners: any[] = [
    { "img": "../../assets/banner/banner.png", },
    { "img": "../../assets/banner/BANNER2.png", },
    { "img": "../../assets/banner/banner3.png", },
    // { "img": "https://placehold.co/600x400/orange/white", },
  ]
  public categorias: any[] = []
  public produtos: any [] = []

  //Inicializa searchTerm como uma string vazia
  public searchTerm: string = '';

  constructor(
    private _router: Router,
    public alertController: AlertController,
    private _categorias: CategoriaService,
    private _produtos: ProdutosService,
  ) {

    this.listarCategorias()
    this.listarProdutos()
  }

  listarProdutos(searchTerm?: string){
    this.produtos = []
    if(searchTerm){
      //Se houver um searchTerm, chama a função de pesquisa
      this._produtos.searchProdutosByName(searchTerm).subscribe((data: any) => {
        if(data['status'] == 'success') {
          data['produtos'].forEach((element: any) => {
            this.produtos.push(element);
          });
        }
      })
    } else{
      //Se não houver searchTerm, busca todos os produtos
      this._produtos.getProdutos().subscribe((data: any)=> {
        if(data['status'] == 'success' && data ['produtos']){
          data['produtos'].forEach((element: any)=> {
            this.produtos.push(element)
          })
        }
      })
    }
  }

  listarCategorias(){
    this.categorias = []
    this._categorias.getCategorias().subscribe((data: any) => {
      if(data['status'] == 'success') {
        data['categoria'].forEach((element: any) => {
          this.categorias.push(element);
        });
      }
    })
  }

  getProduto(pk_produto:number){
    this._router.navigate(['/produto/' + pk_produto])
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listarProdutos();
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  ionviewEnter(){
    this.listarProdutos('')
  }

  handleInput(event: any){
    const searchTerm = event.target.value;
    this.listarProdutos( searchTerm );
  }

  InputIsActive(): void {
    this.inputSelect = !this.inputSelect;
  }

  onEnter() {
    console.log('Input value:', this.inputValue);
  }
}


