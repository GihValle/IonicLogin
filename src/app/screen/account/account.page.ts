import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {

  public formulario: FormGroup = this.FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    senha: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    nome: [null, [Validators.required]],
    cpf: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    tel: [null, [Validators.required]],
  })

  constructor(
    public FormBuilder: FormBuilder,
    public alertController: AlertController,
    private _register: RegisterService,
    private _router: Router
  ) { }

  onRegister(){
    console.log(this.formulario)
    if (this.formulario.valid){
      //Seguir com cadastro do cliente
      this._register.postCliente(this.formulario.value).subscribe((data: any) => {
        if(data['status'] == 'success'){
          this.presentAlert('Oba', 'Seu cadastro foi realizado com sucesso')
        } else{
          this.presentAlert('Ops', data['Error'])
        }

        this._router.navigate(['/login']);
      })
    }
    else{
      //Solicitar preenchimento de campos corretamente
      this.presentAlert('Ops', 'Por favor, preencha corretamente o formulário')
    }
  }

  async presentAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok']
    })

    await alert.present()
  }
}
