import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppointmentMakePageComponent } from './appointment-make-page.component'

const routes: Routes = [
  {
    path: '',
    component: AppointmentMakePageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentMakePageRoutingModule {}
