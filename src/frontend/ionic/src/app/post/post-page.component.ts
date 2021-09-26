import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import axios from 'axios'
import { ConfigService } from '../config/env'

@Component({
  selector: 'app-post',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {

  private items = []
  private id: any;
  constructor(protected activeRoutes: ActivatedRoute, public route:Router) {
    this.id = this.activeRoutes.snapshot.paramMap.get('id')
  }



  ngOnInit() {
    axios.defaults.baseURL = ConfigService.config.url
    axios.get('/posts/' + this.id,{
    }).then(res =>{
      this.items = res.data
      console.log(res.data)
    }).catch(function() {
      console.log('Unable to get the posts')

    })
  }
  back() {
    this.route.navigate(['/timeline'])
  }
}
