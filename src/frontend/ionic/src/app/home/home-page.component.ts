import { Component } from '@angular/core'
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss'],
})
export class HomePageComponent {

  public appointments: Array<any> = [
    {
      service: {
        name: 'Lorem ipsum'
      },
      from: "07.28 14:00",
      to: "07.28 15:00",
      img: 'https://picsum.photos/200'
    },
    {
      service: {
        name: 'Lorem ipsum3'
      },
      from: "07.28 14:00",
      to: "07.28 15:00",
      img: 'https://picsum.photos/200'
    },
    {
      service: {
        name: 'Lorem ipsum4'
      },
      from: "07.28 14:00",
      to: "07.28 15:00",
      img: 'https://picsum.photos/200'
    },
    {
      service: {
        name: 'Lorem ipsum2'
      },
      from: "07.28 14:00",
      to: "07.28 15:00",
      img: 'https://picsum.photos/200'
    },
    {
      service: {
        name: 'Lorem ipsum1'
      },
      from: "07.28 14:00",
      to: "07.28 15:00",
      img: 'https://picsum.photos/200'
    },
    {
      service: {
        name: 'Lorem ipsum0'
      },
      from: "07.28 14:00",
      to: "07.28 15:00",
      img: 'https://picsum.photos/200'
    },
    {
      service: {
        name: 'Lorem ipsum-2'
      },
      from: "07.28 14:00",
      to: "07.28 15:00",
      img: 'https://picsum.photos/200'
    },
    {
      service: {
        name: 'Lorem ipsum1'
      },
      from: "07.28 14:00",
      to: "07.28 15:00",
      img: 'https://picsum.photos/200'
    },
  ]

  constructor(public route: Router) {

     for (let i = 0; i < this.appointments.length; i++) {
      const element = this.appointments[i]

     /* var container = document.getElementById("container");

      var fromRight = document.getElementById("fromRight"+i);
      var fromLeft = document.getElementById("fromLeft"+i);
      var circle = document.getElementById("circle"+i); */

      console.log(`name: ${element.service.name} bal oldal: ${i % 2}`)
    }
  }

  details(appointment_id){
    this.route.navigate(['/appointment-inspect',{appointment_id}])

  }

}
