import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome_cliente = window.localStorage.getItem('nome_cliente')

  //Inicializa searchTerm como uma string vazia
  public searchTerm: string = '';

  constructor(
    private _router: Router,
    public alertController: AlertController,
  ) {
    if(window.localStorage.getItem('autorizado') != 'true'){
      this.presentAlert('Ops,', 'Realize o login primeiro.')
      this._router.navigate(['./login'])
      return
    }
  }

  onLogout(){
    window.localStorage.clear()
    this._router.navigate(['/login'])
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
