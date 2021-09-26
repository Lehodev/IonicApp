import { Component} from '@angular/core'
import { EmailComposer } from '@ionic-native/email-composer/ngx'
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent{

  constructor(private emailComposer: EmailComposer, public router: Router) { }

  sendEmail() {
    try
    {
    this.emailComposer.open({
      to:'example@test.com'
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
