import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentInspectPageComponent } from './appointment-inspect-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentInspectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentInspectPageRoutingModule {}
