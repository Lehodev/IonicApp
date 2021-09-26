import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { AppointmentMakePageComponent } from './appointment-make-page.component'

describe('AppointmentMakePage', () => {
  let component: AppointmentMakePageComponent
  let fixture: ComponentFixture<AppointmentMakePageComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentMakePageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(AppointmentMakePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
