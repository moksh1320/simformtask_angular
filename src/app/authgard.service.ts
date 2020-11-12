import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgardService {

  constructor(private _router: Router) { }
  canActivate(_active: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Boolean {
    if (localStorage.getItem('user_id') != null) {
      return true;
    }
    else {
      alert('You are not Logged In');
      this._router.navigate(['/']);
      return false;
    }
  }
}
