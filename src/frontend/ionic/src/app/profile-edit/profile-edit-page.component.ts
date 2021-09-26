import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import axios from 'axios'
import { ConfigService } from '../config/env'

import { StorageService } from '../storage/storage'



@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit-page.component.html',
  styleUrls: ['./profile-edit-page.component.scss'],
})
export class ProfileEditPageComponent implements OnInit {
  private datas : any =  {
    email : "",
    name : "",
    country: "",
    postcode: "",
    city : "",
    address : "",
    password : "",
    id: ""

  }
  current_password : string;
  password_confirm :string ;
  alertController: any;
  token

  constructor( public route:Router, protected storageService: StorageService) { }

  ngOnInit() {
    this.getUser()
  }


  save() {

    const params = {
      id: this.datas["id"]
    }

    axios.defaults.baseURL = ConfigService.config.url
    axios.put('/users/' + params.id, this.datas, {
      headers: {
        'content-type': 'application/json',
      }
    }).then(function() {
      console.log('Authenticated')

    }).catch(function() {
      console.log('Error on Authentication')

    })

  }
  async getUser() {
    this.token = await this.getTokenFromStorage()
    axios.defaults.baseURL = ConfigService.config.url
    axios.get('/auth/profile',{
      headers: {
        'content-type': 'application/json',
        'authorization' : 'Bearer '.concat(this.token)
      }
    }).then(res =>{
      this.datas["id"] = res.data.id
      this.datas["name"] = res.data.name
      this.datas["email"] = res.data.email
      this.datas["image"] = res.data.images.src


    }).catch(function() {
      console.log('Error on Authentication')

    })
  }
  back() {
    this.route.navigate(['/profile'])
  }

  getTokenFromStorage(){
    return this.storageService.get('_TOKEN_')
  }
}
