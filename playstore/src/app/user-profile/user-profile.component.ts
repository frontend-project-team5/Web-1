import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private router: Router) { }
  userEmail:string;
  userName:string;
  ngOnInit(): void {
    this.userEmail=localStorage.getItem("email")
    this.userName=localStorage.getItem("name")
   
  }
  onLibrary()
  {
    this.router.navigateByUrl(`user-profile/${this.userName}/library`)
  }
  

}
