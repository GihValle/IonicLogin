import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/core/database.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  showFallback = true;

  public msg: string = "Lendo...";

  public formulario: FormGroup = this.FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  })

  constructor(
    private navCtrl: NavController,
    public FormBuilder: FormBuilder,
    public alertController: AlertController,
    private _loginService: LoginService,
    private faio: FingerprintAIO,
    private _router: Router,
    private _databaseService: DatabaseService
  ) {
    this.navCtrl = navCtrl;
  }

  selectByCondition(){
    this._databaseService.book_email,
    this._databaseService.book_password
  }

  showRegister() {
    this.navCtrl.navigateForward('register');
  }

  onLogin() {
    if(this.formulario.valid == false){
      // alert('oi');
      this.presentAlert('ops!', 'Preencha todos os campos obrigatórios!')
    }

    else{
      this._loginService.getLogin(
      this.formulario.controls["email"].value,
      this.formulario.controls["password"].value
    ).subscribe((data: any) => {

      if(data["status"] == "success") {
        //criar um item no LocalStoarage
        //Responsável por salvar no 'cookie' do navegador
        window.localStorage.setItem('autorizado', 'true'),
        window.localStorage.setItem('nome_cliente', data["clientes"]["nome"])

        this.presentAlert("Bem-Vindo!", data["clientes"]["nome"] + ", login realizado com sucesso!")
        this._router.navigate(['/home'])
      } else{
        this.presentAlert('ops!', data["error"])
      }
    })
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }

  unlockFAIO(){
    this.faio.show({
      title: "Lendo...",
      subtitle: "Use sua Digital"
    }).then((res)=>{
      console.log(res);

      //Ir para outra página
      this.msg = "A Digital está correta.";
      this._router.navigate(['/home']);
    }).catch((err)=>{
      console.log(err);

      //Ir para outra página
      this.msg = "A Digital está incorreta.";
      this._router.navigate(['/register']);
    })
  }

}


