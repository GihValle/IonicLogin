
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatabaseService } from './services/core/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private db: DatabaseService) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.db.createDatabase();
    })
  }
}
