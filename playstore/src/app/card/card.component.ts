import { Component, OnInit,Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataService } from '../data.service';
import { displaygame } from '../Models/displaygame.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() pro:displaygame={
    id : 0,
    title : "",
    thumbnail : "",
    short_description : "",
    game_url : "",
    genre : "",
    platform : "",
    publisher : "",
    developer : "",
    release_date : "",
    freetogame_profile_url : "",
  };
  cartObj:any
  constructor(private ROUTER:Router,private dsobj:DataService){
  }
  save=false
  ngOnInit(): void{
  }

    getDetailsOfGame(id:any){
      console.log(id);
      this.ROUTER.navigateByUrl('/'+id);
    }

    playVerify(url:string){
      if(localStorage.getItem("email")==null){
        alert("Signin to play game")
        this.ROUTER.navigateByUrl("signin");
      }
      else{
      window.open(url);
      }
    }
    onCart(product){
      if(localStorage.getItem("email")==null)
      {alert("Signin to save to library")
      this.ROUTER.navigateByUrl("signin");
    }
    else
    {  this.cartObj={"name":localStorage.getItem("name"),
                      "email":localStorage.getItem("email"),
                      "productObj":product}
        console.log("in card ts",this.cartObj)
      this.dsobj.pushToCart(this.cartObj).subscribe(
        res=>{alert(res.message)
        },
        err=>{console.log("error in pushing to cart",err)}
      )
    }
    }

}
