import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { ProfileEditPageRoutingModule } from './profile-edit-routing.module'

import { ProfileEditPageComponent } from './profile-edit-page.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEditPageRoutingModule
  ],
  declarations: [ProfileEditPageComponent]
})
export class ProfileEditPageModule {}
