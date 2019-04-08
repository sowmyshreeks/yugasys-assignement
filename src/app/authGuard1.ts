import { Injectable }          from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard1 implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {   
    if (sessionStorage.getItem("currentuser") === null){
        this.router.navigate(['/dashboard']);
        return false;
    } else {
        return true;
    }
  }
}
