import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [
    {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  },
  LoginService,
  FingerprintAIO,
  SQLite,
  SQLitePorter
],
  bootstrap: [AppComponent],
})
export class AppModule {}
