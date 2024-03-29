import {Component, OnInit, ViewChild} from '@angular/core'
import { NavController} from '@ionic/angular'
import {CalendarMode, Step} from 'ionic2-calendar/calendar'
import {CalendarComponent} from 'ionic2-calendar'

@Component({
  selector: 'app-edit-working-hours',
  templateUrl: './edit-working-hours-page.component.html',
  styleUrls: ['./edit-working-hours-page.component.scss'],
})
export class EditWorkingHoursPageComponent implements OnInit {

  show:boolean = false;
  eventSource;
  viewTitle;

  selectedDate: Date;


  isToday:boolean;
  calendar = {
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function(date:Date) {
        return date.getDate().toString()
      },
      formatMonthViewDayHeader: function(date:Date) {
        return 'MonMH'
      },
      formatMonthViewTitle: function(date:Date) {
        return 'testMT'
      },
      formatWeekViewDayHeader: function(date:Date) {
        return 'MonWH'
      },
      formatWeekViewTitle: function(date:Date) {
        return 'testWT'
      },
      formatWeekViewHourColumn: function(date:Date) {
        return 'testWH'
      },
      formatDayViewHourColumn: function(date:Date) {
        return 'testDH'
      },
      formatDayViewTitle: function(date:Date) {
        return 'testDT'
      }
    }
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor(private navController:NavController) {

  }


  onViewTitleChanged(title) {
    this.viewTitle = title
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title)
  }

  changeMode(mode) {
    this.calendar.mode = mode
  }

  today() {
    this.calendar.currentDate = new Date()
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled)
  }

  onCurrentDateChanged(event:Date) {
    var today = new Date()
    today.setHours(0, 0, 0, 0)
    event.setHours(0, 0, 0, 0)
    this.isToday = today.getTime() === event.getTime()
  }


  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime)
  }

  markDisabled = (date:Date) => {
    var current = new Date()
    current.setHours(0, 0, 0)
    return date < current
  };

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  showCalendar(){
    if(this.show === false){
      this.show = true
    }
    else{
      this.show = false
    }
  }

  next(){
    this.myCal.slideNext()
  }

  back(){
    this.myCal.slidePrev()
  }
  loadEvents() {
    this.eventSource = this.createRandomEvents()
  }

  createRandomEvents() {
    var events = []
    for (var i = 0; i < 50; i += 1) {
      var date = new Date()
      var eventType = Math.floor(Math.random() * 2)
      var startDay = Math.floor(Math.random() * 90) - 45
      var endDay = Math.floor(Math.random() * 2) + startDay
      var startTime
      var endTime
      if (eventType === 0) {
        startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay))
        if (endDay === startDay) {
          endDay += 1
        }
        endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay))
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true
        })
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60)
        var endMinute = Math.floor(Math.random() * 180) + startMinute
        startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute)
        endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute)
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false
        })
      }
    }
    return events
  }

}
