import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {

  public formulario: FormGroup = this.formBuilder.group({
    id: [window.localStorage.getItem('pk_cliente'), [Validators.required]],
    nome:[null, [Validators.required]],
    cpf:[null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    nascimento:[null],
    tel:[null, [Validators.required]],
    email:[null, [Validators.required, Validators.email]],
    senha:[null, [Validators.minLength(4), Validators.maxLength(10)]],
    endereco:[null, [Validators.required]],
  })

  constructor(
    public formBuilder: FormBuilder,
    private _clientesService: ClientesService,
    public alertController: AlertController,
    private _router: Router
  ) {
    this._clientesService.getCliente(this.formulario.controls['id'].value)
    .subscribe((data: any) => {
      if(data['status'] == 'success'){
        this.formulario.patchValue({
          nome: data['clientes']['nome'],
          cpf: data['clientes']['cpf'],
          nascimento: data['clientes']['nascimento'],
          tel: data['clientes']['tel'],
          email: data['clientes']['email'],
          endereco: data['clientes']['endereco']
        })
      } else{
        this.presentAlert('Ops', data['Error'])
      }
    })
  }

  async presentAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok']
    })

    await alert.present()
  }

  onSave(){
    this._clientesService.putCliente(this.formulario.value)
    .subscribe((data: any) => {
      if(data['status'] == 'success'){
        this.presentAlert('Oba!', 'Registro salvo com sucesso.')
        this._router.navigate(['/home'])
      } else{
        this.presentAlert('Ops!', data['Error'])
      }
    })
  }
}
