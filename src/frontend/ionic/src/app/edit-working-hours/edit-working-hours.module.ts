import { NgModule, LOCALE_ID } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { EditWorkingHoursPageRoutingModule } from './edit-working-hours-routing.module'

import { EditWorkingHoursPageComponent } from './edit-working-hours-page.component'

import { NgCalendarModule  } from 'ionic2-calendar'

import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';
registerLocaleData(localeHu);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditWorkingHoursPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [EditWorkingHoursPageComponent],
  providers:[
    {provide: LOCALE_ID, useValue: 'hu-HU'}
  ]
})
export class EditWorkingHoursPageModule {}
