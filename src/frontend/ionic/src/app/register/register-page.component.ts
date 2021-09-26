import { Component} from '@angular/core'
import axios from 'axios'
import { ConfigService } from '../config/env'


@Component({
  selector: 'app-register',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent{

  name : string = "";
  email : string = "";
  password : string = "";
  passwordAgain: string = "";
  log: string="";
  read_me:  boolean = false;

  constructor() { }

    isChecked(event) {
    if ( event.checked ) {
      this.read_me = true
   }
  }
  register(){
    if (this.name.trim().length !== 0 && this.email.trim().length !== 0 && this.password.trim().length !== 0) {
      if( this.read_me === true )
      {
      if(this.password === this.passwordAgain){
        this.log = " "
        const params = {
          name: this.name,
          password: this.password,
          email: this.email
        }
        axios.defaults.baseURL = ConfigService.config.url
        axios.post('/auth/register', params, {
          headers: {
            'content-type': 'application/json',
          },
        }).then(function() {
          console.log('Authenticated')

        }).catch(function() {
          console.log('Error on Authentication')

        })
      }
      else{
        this.log = "A két jelszó nem egyezik"
      }
    }
    else{
      this.log = "El kell fogadnod a felhasználási feltételeket."
    }
    }
    else{
        this.log = "Az adatok nem lehetnek üresek"
    }
  }

}
