import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playstore';

  changeBackground():void{

    let x=document.getElementById("dropdownMenuButton1");
    if(x!=null){
      let y=x.getAttribute("aria-expanded");
      if(y=="false"){
        this.backgroundBlur("0.2","0.2");
      }
      else{
        
        this.backgroundBlur("1.0","1.0");
      }
    };

  }
  backgroundBlur(a:string,b:string):void{
    let a1=document.getElementById("sec");
    if(a1!=null){
      a1.style.opacity=a;
    }
    let a2=document.getElementById("footer");
    if(a2!=null){
      a2.style.opacity=b;
    }
  }


  
  
}
