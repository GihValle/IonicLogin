import { DatabaseService } from './services/core/database.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public nome_cliente = window.localStorage.getItem('nome_cliente')

  constructor(
    private platform: Platform,
    private db: DatabaseService,
    private _router: Router) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.db.createOpenDatabase();
    })
  }

  onLogout(){
    window.localStorage.clear()
    this._router.navigate(['/login'])
  }
}
