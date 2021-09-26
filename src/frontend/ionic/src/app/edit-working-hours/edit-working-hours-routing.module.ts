import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { EditWorkingHoursPageComponent } from './edit-working-hours-page.component'

const routes: Routes = [
  {
    path: '',
    component: EditWorkingHoursPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditWorkingHoursPageRoutingModule {}
