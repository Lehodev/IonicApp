import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { ContactPageRoutingModule } from './contact-routing.module'

import { ContactPageComponent } from './contact-page.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule
  ],
  declarations: [ContactPageComponent]
})
export class ContactPageModule {}
