import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import axios from 'axios'
import { AlertController } from '@ionic/angular'

import { ConfigService } from '../config/env'

import { StorageService } from '../storage/storage'

@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})

export class ProfilePageComponent implements OnInit  {
  private user: any = {
    id: "",
    name: "Üres név",
    phone: "Üres telefonszám",
    email: "Üres email",
    address: "Üres cím",
    image : ""
  };
  token


  constructor(public route:Router,
    public alertController: AlertController,protected storageService: StorageService
    )  {}

    ngOnInit() {
        this.getUser()
    }

  async delete() {
    this.token = await this.getTokenFromStorage()
    this.alertController.create({
      header: 'Törlés megerősítés',
      subHeader: 'Törléshez megerősítés szükséges',
      message: 'Biztosan törölni szeretné?',
      buttons: [
        {
          text: 'Nem',
          handler: () => {
            this.alertController.create({
              header: 'Sikertelen törlés',
              subHeader: '',
              message: 'Nem sikerült a profil törlése',
              buttons: ['OK']
            }).then(res => {

              res.present()

            })
          }
        },
        {
          text: 'Igen',
          handler: () => {


            const params =  {
              id: this.user["id"]

            }

            console.log(this.token)
            axios.defaults.baseURL = ConfigService.config.url
            axios.delete('/users/' + params.id,  {
              headers: {
                'content-type': 'application/json',
                'authorization' : 'Bearer '.concat(this.token)
              },
            }).then(res =>{
              console.log(this.user["id"])
              console.log(res.data.access_token)

            }).catch(function() {
              console.log('Error on Authentication')

            })
          }
        }
      ]
    }).then(res => {
      res.present()
    })
  }
  async getUser() {
    this.token = await this.getTokenFromStorage()
    console.log(this.token)
    axios.defaults.baseURL = ConfigService.config.url
    axios.get('/auth/profile',{
      headers: {
        'content-type': 'application/json',
        'authorization' : 'Bearer '.concat(this.token)
      }
    }).then(res =>{
      console.log(res.data.id)
    this.user["id"] = res.data.id
     this.user["name"] = res.data.name
     this.user["email"] = res.data.email
     this.user["image"] = res.data.images.src


    }).catch(function() {
      console.log('Error on Authentication')

    })
  }
  edit() {
this.route.navigate(['/profile-edit'])
  }

  getTokenFromStorage(){
    return this.storageService.get('_TOKEN_')
  }
}

