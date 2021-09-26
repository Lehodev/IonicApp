import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx'
import { Router } from '@angular/router'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor(private emailComposer: EmailComposer, public router: Router) { }

  ngOnInit() {
  }
  contantEmail() {
    try
    {
      this.emailComposer.open({
        to:'example@example.test'
      })
    }
    catch(Error)
    {
      console.log('Nincs email alkalmazás')
    }
  }
  bugReport() {
    try
    {
      this.emailComposer.open({
        to:'example2@example.com'
      })
    }
    catch(Error)
    {
      console.log('Nincs email alkalmazás')
    }
  }

  back(){
    this.router.navigate(['/timeline'])
  }

}
