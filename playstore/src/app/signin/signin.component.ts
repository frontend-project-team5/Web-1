import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router,private dsobj:DataService) { }


  ngOnInit(): void {
  }
  moveToSignup(){
    this.router.navigateByUrl('signup')
  }
  getUsersData(formreference:NgForm){
    let userData=formreference.value;    
    this.dsobj.onlogin(userData).subscribe(
      res=>{
        if(res.message=="success")
        {this.router.navigateByUrl(`/user-profile/${res.name}`) 
        this.dsobj.status=true
        localStorage.setItem("email",userData.email)
        localStorage.setItem("name",res.name)
      }
        else{alert(res.message)}
      },
      err=>{
        console.log("error in login=",err)
      }
    )
  }
}
