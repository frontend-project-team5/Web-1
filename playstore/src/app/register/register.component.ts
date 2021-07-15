import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private RouTer:Router,private dsobj:DataService) { }


  ngOnInit(): void {
  }
  moveToSignin(){
    this.RouTer.navigateByUrl('signin')
  }
  getUsersData(ref:NgForm){
    console.log("form submitted")
    let temp=ref.value;
    localStorage.setItem("email",temp.email);
    
    console.log(temp);
    this.dsobj.registerUser(temp).subscribe(
      res=>{
        if(res.message=="user created")
        {
          alert("user created")
          this.RouTer.navigateByUrl("/signin")
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        alert("something went wrong")
        console.log(err)
      }
    )
    ref.reset();
  }
}
