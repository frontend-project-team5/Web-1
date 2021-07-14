import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private RouTer:Router) { }


  ngOnInit(): void {
  }
  moveToSignin(){
    this.RouTer.navigateByUrl('signin')
  }
  getUsersData(ref:NgForm){
    let temp=ref.value;
    localStorage.setItem("email",temp.email);
    this.RouTer.navigateByUrl('home')
    console.log(temp);
    ref.reset();
  }
}
