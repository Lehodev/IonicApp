import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import axios from "axios";
import {ConfigService} from "../config/env";

@Component({
  selector: 'app-appointment-inspect',
  templateUrl: './appointment-inspect-page.component.html',
  styleUrls: ['./appointment-inspect-page.component.scss'],
})
export class AppointmentInspectPageComponent implements OnInit {

  private id: any;
  private name: any;
  private description: any;
  private server_name: any;
  private items = []
  constructor(protected activeRoutes: ActivatedRoute, public route:Router) {
    this.id = this.activeRoutes.snapshot.paramMap.get('appointment_id')
  }

  ngOnInit() {
    axios.defaults.baseURL = ConfigService.config.url
    axios.get('/services/' + this.id,{
    }).then(res =>{
      this.items = res.data
      this.name = res.data.name
      this.description = res.data.description
      this.server_name = res.data.user.name
      console.log(res.data)
    }).catch(function() {
      console.log('Unable to get the posts')

    })
  }

  back() {
    this.route.navigate(['/home'])
  }

  cancelAppointment(){
    console.log("Nem működik")
  }

}
