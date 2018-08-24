import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate {

  constructor(private route: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     const status =  sessionStorage.getItem('userLogged');
     let allow = false;
     const reqURL = state.url;
     console.log(reqURL);
     if (status === 'true') {
       allow = true;
     } else {
      allow = false;
      this.route.navigate(['/login', reqURL]);
     }

    return allow;
  }
}
