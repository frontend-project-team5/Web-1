import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { displaygame } from 'src/app/Models/displaygame.model';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent implements OnInit {

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
      this.ROUTER.navigateByUrl('/viewgames'+id);
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

    editgame(id:number){
      this.ROUTER.navigateByUrl('admin/editgame/'+id);
    }
}
