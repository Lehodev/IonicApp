import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { ProfilePageRoutingModule } from './profile-routing.module'

import { ProfilePageComponent } from './profile-page.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePageComponent]
})
export class ProfilePageModule {}
