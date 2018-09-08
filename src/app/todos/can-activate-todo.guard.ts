import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../sign-in/auth.service";
import {SessionService} from "../shared/services/session.service";

@Injectable()
export class CanActivateTodoGuard implements CanActivate {

  constructor(private session: SessionService, private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('here singned in: ' + this.session.accessToken);
    if (!this.auth.isSignedIn()) {
      this.router.navigate(['/sign-in']);
      return false
    } else {
      console.log('singned in');
    }
    return true;
  }

}
