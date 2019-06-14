import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages=[
    {
      title: "Documentos",
      url: "/menu/home",
      needsLogin: false,
      alwaysDisplay: true
    }, {
      title: "Log in",
      url: "/menu/login",
      needsLogin: false,
      alwaysDisplay: false
    },{
      title: "Agregar",
      url: "/menu/add",
      needsLogin: true,
      alwaysDisplay: false
    },{
      title: "Log out",
      url: "/menu/logout",
      needsLogin: true,
      alwaysDisplay: false
    }
  ];

  selectedPath;

  constructor(private router: Router, private auth: AuthService) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
  }

  ngOnInit() {
  }

  isUserLoggedIn(){
    return this.auth.isLoggedIn();
  }

  logout(){
    this.auth.logout();
  }
}
