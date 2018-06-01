import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-2-local-storage';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService,private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.localStorageService.get("userName")!=null){
       
        return true;
      }else{
        this.router.navigateByUrl('');
        return false;
      }
  }
}
