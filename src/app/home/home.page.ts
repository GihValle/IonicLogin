import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { SwiperOptions } from 'swiper';
import { CategoriaService } from '../services/categoria.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public banners: any[] = [
    {
      "img": "https://placehold.co/600x400",
    },
    {
      "img": "https://placehold.co/600x400/000000/FFF",
    },
    {
      "img": "https://placehold.co/600x400",
    },
    {
      "img": "https://placehold.co/600x400/orange/white",
    },
  ]

  public categorias: any[] = []

  public produtos: any [] = []

  constructor(
    private _router: Router,
    public alertController: AlertController,
    private _categorias: CategoriaService,
    private _produtos: ProdutosService,
  ) {
    if(window.localStorage.getItem('autorizado') != 'true'){
      this.presentAlert('Ops,', 'Realize o login primeiro.')
      this._router.navigate(['./login'])
      return
    }

    this.listarCategorias()
    this.listarProdutos()
  }

  listarCategorias(){
    this._categorias.getCategorias().subscribe((data: any) => {
      if(data['status'] == 'success') {
        data['categoria'].forEach((element: any) => {
          this.categorias.push(element);
        });
      }
    })
  }

  listarProdutos(){
    this._produtos.getProdutos().subscribe((data: any) => {
      if(data['status'] == 'success') {
        data['produtos'].forEach((element: any) => {
          this.produtos.push(element);
        });
      }
    })
  }

  getProduto(pk_produto:number){
    this._router.navigate(['/produto/' + pk_produto])
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }

}
