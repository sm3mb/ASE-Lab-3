import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'calories';
  link;

  constructor(private router: Router) {}

  ngOnInit() {
    this.link = this.router.url;
    console.log('active link...',this.router.url);
  }
}
