import { Component} from '@angular/core'
import axios from 'axios'
import { ConfigService } from './config/env'
import { StorageService } from './storage/storage'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user :any = {
    email : "",
    image : "",
  };
  hideLogin=false;
  hideLogout=true;
  token

  constructor(protected config: ConfigService,protected storageService: StorageService) {}

  async getUser() {
    this.token = await this.getTokenFromStorage()
    if(this.token === "" || this.token === null)
    {
      this.hideLogin = false
      this.hideLogout = true
    }
    else{
      this.hideLogin = true
      this.hideLogout = false
      axios.defaults.baseURL = ConfigService.config.url
      axios.get('/auth/profile',{
        headers: {
          'content-type': 'application/json',
          'authorization' : 'Bearer '.concat(this.token)
        }
      }).then(res =>{
       this.user["name"] = res.data.name
       this.user["email"] = res.data.email
      }).then(function(response) {
        this.user = response
      }).catch(function() {
        console.log('Error on Authentication')

      })
    }

  }

  async getTokenFromStorage(){
    return await this.storageService.get('_TOKEN_')
  }

  logOut(){
    this.storageService.remove('_TOKEN_')
  }
}
