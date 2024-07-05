import { AlertController, IonIcon } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage {
  private _pk_produto: number = 0;

  //VARIÁVEIS PARA ARMAZENAR INFORMAÇÕES DO PRODUTO
  public categoria: string = '';
  public cor: string = '';
  public desc_produto: string = '';
  public genero: string = '';
  public img: string = '';
  public marca: string = '';
  public nome: string = '';
  public sub_categoria: string = '';
  public tamanho: string = '';
  public valor: string = '';

  count: number = 10;

  constructor(
    private _router: Router,
    public AlertController: AlertController,
    private _activatedRoute: ActivatedRoute,
    private _produto: ProdutosService
  ) {
    if (window.localStorage.getItem('autorizado') != 'true') {
      this.presentAlert('Ops,', 'Realize o login primeiro.');
      this._router.navigate(['./login']);
      return;
    }
    //PEGAR OS PARÂMETROS ENVIADOS NA ROTA
    this._activatedRoute.params.subscribe((data: any) => {
      this._pk_produto = data['id'];
    });
  }

  decrement(){
    if( this.count > 0)  {
      this.count --;
    }
  }

  increment() {
    if (this.count < 10) {
      this.count++;
    }
  }

  ionViewWillEnter() {
    this.getProduto(this._pk_produto);
  }

  getProduto(pk_produto: number) {
    this._produto.getProduto(pk_produto).subscribe((data: any) => {
      if (data['status'] == 'success') {
        this.categoria = data['produtos']['categoria'];
        this.cor = data['produtos']['cor'];
        this.desc_produto = data['produtos']['desc_produto'];
        this.genero = data['produtos']['genero'];
        this.img = data['produtos']['img'];
        this.marca = data['produtos']['marca'];
        this.nome = data['produtos']['nome'];
        this.sub_categoria = data['produtos']['sub_categoria'];
        this.tamanho = data['produtos']['tamanho'];
        this.valor = data['produtos']['valor'];
      } else {
        this.presentAlert('Ops!', 'Produto não encontrado');
        this._router.navigate(['./home']);
      }

    });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.AlertController.create({
      header: header,
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
