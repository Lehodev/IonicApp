import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { WorkingHoursPageRoutingModule } from './working-hours-routing.module'

import { WorkingHoursPageComponent } from './working-hours-page.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkingHoursPageRoutingModule
  ],
  declarations: [WorkingHoursPageComponent]
})
export class WorkingHoursPageModule {}
