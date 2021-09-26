import { Component } from '@angular/core'
import { Router } from '@angular/router'
import axios from 'axios'
import { ConfigService } from '../config/env'
import { StorageService } from '../storage/storage'

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})


export class LoginPageComponent {

  email : string = "";
  password : string = "";
  log : string = "";
  remember_me : boolean = false;
  token: string


  constructor(private route: Router, protected storageService: StorageService) { }

  isChecked(event) {
    if ( event.checked ) {
      this.remember_me = true
   }
  }

  loginVerification(){
    if (this.password.trim().length !== 0 && this.email.trim().length !== 0) {
      this.log = " "
      const params = {
        email: this.email,
        password: this.password,
        remember_me: this.remember_me
      }

      axios.defaults.baseURL = ConfigService.config.url
      axios.post('/auth/login', params, {
        headers: {
          'content-type': 'application/json',
        },
      }).then(res =>{
        console.log(res.data.access_token)
        this.token = res.data.access_token
        this.addTokenToStorage(this.token)
        this.route.navigate(['/home'])

      }).catch(function() {
        console.log('Error on Authentication')

      })
    }
    else{
      this.log = "A felhasználó név és a jelszó nem lehet üres"

    }

  }

  addTokenToStorage(token: string){
    this.storageService.set('_TOKEN_',token)

  }
}
