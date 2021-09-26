import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ConfigService } from './config/env'
import { File } from '@ionic-native/file/ngx'
import {EmailComposer} from '@ionic-native/email-composer/ngx'

import { IonicStorageModule } from '@ionic/storage-angular'
import { NgCalendarModule  } from 'ionic2-calendar'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),NgCalendarModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ConfigService, File, EmailComposer],
  bootstrap: [AppComponent],
})
export class AppModule {}
