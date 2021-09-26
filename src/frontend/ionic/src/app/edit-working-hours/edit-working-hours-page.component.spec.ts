import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { EditWorkingHoursPageComponent } from './edit-working-hours-page.component'

describe('EditWorkingHoursPage', () => {
  let component: EditWorkingHoursPageComponent
  let fixture: ComponentFixture<EditWorkingHoursPageComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkingHoursPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(EditWorkingHoursPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
