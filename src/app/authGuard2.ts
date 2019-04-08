import { Injectable }          from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard2 implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {   
    if (sessionStorage.getItem("currentuser") === null){
        return true;
    } else {
        this.router.navigate(['/']);
        return false;
    }
  }
}
