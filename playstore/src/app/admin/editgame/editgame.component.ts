import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/games.service';
import { gameattributes } from 'src/app/Models/game.model';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.css']
})
export class EditgameComponent implements OnInit {

  gamedata :gameattributes={
    id: "",
    title: "",
    thumbnail: "",
    status: "",
    short_description: "",
    description: "",
    game_url: "",
    genre: "",
    platform: "",
    publisher: "",
    developer: "",
    release_date: "",
    freetogame_profile_url: "",
    minimum_system_requirements: {
        os: "",
        processor: "",
        memory: "",
        graphics: "",
        storage: "",
    },
    screenshots: [
       {
            id: "",
            image: ""
        },
        {
            id: "",
            image: ""
        },

         {
            id: "",
            image: ""
        },
         {
            id: "",
            image: ""
        }
      ]
  };
  // gamedata:any;
  UserSubscription:any;
  constructor(private ActivRouter:ActivatedRoute,private Ser2:GamesService,private ROUTER:Router) { }

  ngOnInit(): void {
    let ind=this.ActivRouter.snapshot.params.id;
   this.UserSubscription= this.Ser2.SendGamesData(ind).subscribe(
      UserObjet =>{
        this.gamedata=UserObjet;
        console.log(UserObjet);
      },
      err=>{
        console.log('Erroen eccored ' ,err);
      }
    )
  }

}
