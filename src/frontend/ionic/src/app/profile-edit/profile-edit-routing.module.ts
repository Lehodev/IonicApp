import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ProfileEditPageComponent } from './profile-edit-page.component'

const routes: Routes = [
  {
    path: '',
    component: ProfileEditPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEditPageRoutingModule {}
