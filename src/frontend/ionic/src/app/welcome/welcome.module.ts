import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { WelcomePageComponent } from './welcome-page.component'

import { WelcomePageRoutingModule } from './welcome-routing.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule
  ],
  declarations: [WelcomePageComponent]
})
export class WelcomePageModule {}
