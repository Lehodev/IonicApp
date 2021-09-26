import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import axios from 'axios'
import { ConfigService } from '../config/env'


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.scss'],
})
export class TimelinePageComponent implements OnInit {
 private items = []
 private pictures: string = ""
 private currentPage: number = 1
 private maxPage: number = 1
 private showNext: boolean = false;
 private showPrevious: boolean = false;

  constructor(protected configService: ConfigService, protected route: Router) { }

  ngOnInit() {
    axios.defaults.baseURL = ConfigService.config.url
    axios.get(`/posts?per_page=10&page=${this.currentPage}`,{
    }).then(res =>{
      this.items = res.data.data
      this.maxPage = res.data.last_page
      this.pictures = res.data.data.user
      if(this.currentPage < this.maxPage){
        this.showNext = true
      }
    }).catch(function() {
      console.log('Unable to get the posts')

    })
  }

  nextPage(){
    if(this.currentPage < this.maxPage){
      this.currentPage = this.currentPage + 1
      axios.defaults.baseURL = ConfigService.config.url
      axios.get(`/posts?per_page=3&page=${this.currentPage}`,{
      }).then(res =>{
        this.items = res.data.data
        this.maxPage = res.data.last_page
        if(this.currentPage > 1){
          this.showPrevious = true
        }

      }).catch(function() {
        console.log('Unable to get the posts')

      })
    }
    if(this.currentPage === this.maxPage){
      this.showNext = false
    }
  }

  previousPage(){
    if(this.currentPage > 1){
      this.currentPage = this.currentPage - 1
      axios.defaults.baseURL = ConfigService.config.url
      axios.get(`/posts?per_page=3&page=${this.currentPage}`,{
      }).then(res =>{
        this.items = res.data.data
        this.maxPage = res.data.last_page
        if(this.currentPage < this.maxPage){
          this.showNext = true
        }

      }).catch(function() {
        console.log('Unable to get the posts')

      })
    }
    if(this.currentPage === 1){
      this.showPrevious = false
    }
  }

  details(id){
    this.route.navigate(['/post',{id}])

  }



}
