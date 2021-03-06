import { Component } from '@angular/core';
import { User } from '../../user/index';
import { environment } from '../../../environments/environment';

declare var $: any;

@Component({
    selector: 'top-nav',
    templateUrl: 'topnav.html',
})

export class TopNavComponent {
  currentUser: User;
  appName : string;
  
  constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //console.log(environment.appName);
        this.appName = environment.appName;
  }
  
  changeTheme(color: string): void {
    let link: any = $('<link>');
    link
      .appendTo('head')
      .attr({type : 'text/css', rel : 'stylesheet'})
      .attr('href', 'themes/app-' + color + '.css');
  }

  rtl(): void {
    let body: any = $('body');
    body.toggleClass('rtl');
  }

  sidebarToggler(): void  {
    let sidebar: any = $('#sidebar');
    let mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
  }
}
