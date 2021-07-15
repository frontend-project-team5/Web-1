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

//     let userData=formreference.value;   
    
//     if(userData.email=="admin@gmail.com" && userData.password=="admin"){
//       localStorage.setItem("email",userData.email);
//       this.RouTer.navigateByUrl('admin');

//     }
//     else if(userData.email!="1@gmail.com" || userData.password!="123"){
//       alert("invalid credentials");  
//     }    
//     else{
//       localStorage.setItem("email",userData.email);
//       console.log(userData);
//       this.RouTer.navigateByUrl('/home');
//       formreference.reset();
//     }
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
