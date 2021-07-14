import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUserLoginStatus(): boolean {

    if (localStorage.getItem("email") != null) {
      return true;
    }
    else {
      return false;
    }

  }

  userLogout(){
    localStorage.clear();
  }
}
