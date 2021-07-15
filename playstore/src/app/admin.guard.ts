import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private ROUTER:Router){}
  canActivate():boolean{
   if(localStorage.getItem("email")==null){
     alert("login in to appplication");
     this.ROUTER.navigateByUrl('signin')
    return false;
   }
   else{
    return true;
   }
  }
  
}
