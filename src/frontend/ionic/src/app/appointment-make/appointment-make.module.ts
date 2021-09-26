import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { AppointmentMakePageRoutingModule } from './appointment-make-routing.module'

import { AppointmentMakePageComponent } from './appointment-make-page.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentMakePageRoutingModule
  ],
  declarations: [AppointmentMakePageComponent]
})
export class AppointmentMakePageModule {}
