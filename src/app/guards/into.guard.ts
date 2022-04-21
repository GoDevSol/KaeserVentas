import { ServicesService } from 'src/app/api/services.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private api: ServicesService, private router: Router) {

  }

  async canActivate() {
    var IsLogged;
    try {
      var Info = await this.api.getInfoUser();
      IsLogged = true

    } catch (error) {
      IsLogged = false;
    }

    if (IsLogged) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
    }

  }

}
