import { Component } from '@angular/core'
import { Router } from '@angular/router'


@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome-page.component.html',
  styleUrls: ['welcome-page.component.scss'],
})
export class WelcomePageComponent {


  constructor(public route: Router) {}

  register()
  {
    this.route.navigate(['/register'])
  }

  login()
  {
    this.route.navigate(['/login'])
  }

  logMeIn(){
    this.route.navigate(['/welcome'])
  }

}
