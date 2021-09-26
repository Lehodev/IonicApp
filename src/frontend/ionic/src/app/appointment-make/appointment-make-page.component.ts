import { Component, OnInit } from '@angular/core'
import axios from 'axios'
import { ConfigService } from '../config/env'
import { Router } from '@angular/router'


@Component({
  selector: 'app-appointment-make',
  templateUrl: './appointment-make-page.component.html',
  styleUrls: ['./appointment-make-page.component.scss'],
})
export class AppointmentMakePageComponent implements OnInit {
  private items = [];
  private serversArr=[];
  private servicesArr=[];
  private appointsArr=[];
  private server_select: string;
  private service_select: string;
  private appoint_select: string;
  private server_id: string;
  constructor( public route: Router) { }

  ngOnInit() {
    axios.defaults.baseURL = ConfigService.config.url
    axios.get('/servers',{
    }).then(res =>{

      console.log(res.data.data)
      this.serversArr = res.data.data

    }).catch(function() {
      console.log('Unable to get services')

    })


  }

  serverChange($event) {
    this.service_select = null
    this.servicesArr = []
    this.server_id = null
    this.server_id =  $event.target.value
    this.servicesArr = this.serversArr as string[]
    for(let i = 0; i < this.serversArr.length; i++){
      if(this.serversArr[i].id === this.server_id){
        this.servicesArr = this.serversArr[i].services
      }
    }
    console.log(this.servicesArr)
  }

  serviceChange($event) {
    this.appoint_select = null
    this.appointsArr = []
    axios.defaults.baseURL = ConfigService.config.url
    axios.get('/appointments',{
    }).then(res =>{

      console.log(res.data)
      this.appointsArr = res.data

    }).catch(function() {
      console.log('Unable to get appointments')

    })
  }

  back() {
    this.route.navigate(['/home'])
  }

  setAppointment(){
    const params = {
      server: this.server_select,
      service: this.service_select,
      appointment: this.appoint_select
    }
    console.log(params)
    axios.defaults.baseURL = ConfigService.config.url
      axios.post('/appointment', params, {
        headers: {
          'content-type': 'application/json',
        },
      }).catch(function() {
        console.log('Error on Authentication')

      })
  }


}

