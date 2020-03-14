import { Component, OnInit } from '@angular/core';

declare var i: any;

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const siteWidth = $(window).width();
    for (i = 0; i <= 100; i++) {
    }



  }

}
