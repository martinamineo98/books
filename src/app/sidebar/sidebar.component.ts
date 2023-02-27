import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  links = [
    {
      title: 'home',
      url: '/'
    },
    {
      title: 'add new book',
      url: '/add/'
    },
    {
      title: 'advanced search',
      url: '/search/'
    }
  ]

}
