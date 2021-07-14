import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private ROUTER:Router){
  }
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
      this.ROUTER.navigateByUrl(url);
      }
    }

}
