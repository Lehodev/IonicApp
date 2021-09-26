import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentInspectPageRoutingModule } from './appointment-inspect-routing.module';

import { AppointmentInspectPageComponent } from './appointment-inspect-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentInspectPageRoutingModule
  ],
  declarations: [AppointmentInspectPageComponent]
})
export class AppointmentInspectPageModule {}
