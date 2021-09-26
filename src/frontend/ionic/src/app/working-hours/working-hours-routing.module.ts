import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { WorkingHoursPageComponent } from './working-hours-page.component'

const routes: Routes = [
  {
    path: '',
    component: WorkingHoursPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkingHoursPageRoutingModule {}
