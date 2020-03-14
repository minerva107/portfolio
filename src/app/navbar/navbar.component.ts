import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   $('.sidebar-dropdown > a').click(function() {
      $('.sidebar-submenu').slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass('active')
      ) {
        $('.sidebar-dropdown').removeClass('active');
        $(this)
          .parent()
          .removeClass('active');
      } else {
        $('.sidebar-dropdown').removeClass('active');
        $(this)
          .next('.sidebar-submenu')
          .slideDown(200);
        $(this)
          .parent()
          .addClass('active');
      }
    });

    // tslint:disable-next-line: deprecation
   $('#close-sidebar').click(function() {
      $('.page-wrapper').removeClass('toggled');
    });
   $('#show-sidebar').click(function() {
      $('.page-wrapper').addClass('toggled');
    });

  }

}
