import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { side_menu_items } from './../side-menu';
@Component({
  selector: 'app-authorised-layout',
  templateUrl: './authorised-layout.component.html',
  styleUrls: ['./authorised-layout.component.scss']
})
export class AuthorisedLayoutComponent implements OnInit {

  sideMenuList = side_menu_items;

  constructor() { }

  toggleMenu() {

    console.log("event -- ", event);
    var windowWidth = $(window).width();
    console.log("windowWidth -- ", windowWidth);
    if (windowWidth < 1010) {
      console.log("windowWidth --");
      $('#layoutContent').removeClass('open');
      if (windowWidth < 760) {
        $('#left-panel').slideToggle();
      } else {
        $('#left-panel').toggleClass('open-menu');
      }
    } else {
      $('#layoutContent').toggleClass('open');
      $('#left-panel').removeClass('open-menu');
    }

  }

  closeSearch(event) {
    event.preventDefault();
    event.stopPropagation();
    $('.search-trigger').parent('.header-left').removeClass('open');
  }

  openSearch(event) {
    event.preventDefault();
    event.stopPropagation();
    $('.search-trigger').parent('.header-left').addClass('open');
  }

  ngOnInit() {
  }

}
