import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auth:AuthService, private router:Router ) { }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){

    if( this.auth.isAuthenticated() ){
      return true;
    }else{
      this.router.navigate(['/home']);
      return false;
    }

  }

}
