import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private RouTer:Router) { }


  ngOnInit(): void {
  }
  moveToSignup(){
    this.RouTer.navigateByUrl('signup')
  }
  getUsersData(formreference:NgForm){
    let userData=formreference.value;    
    if(userData.email!="1@gmail.com" || userData.password!="123"){
      alert("invalid credentials");
    }    
    else{
      localStorage.setItem("email",userData.email);
      this.RouTer.navigateByUrl('/home');
      formreference.reset();
    }
  }
}
