import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { TimelinePageRoutingModule } from './timeline-routing.module'

import { TimelinePageComponent } from './timeline-page.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelinePageRoutingModule
  ],
  declarations: [TimelinePageComponent]
})
export class TimelinePageModule {}
