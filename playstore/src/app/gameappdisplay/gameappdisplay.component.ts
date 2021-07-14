import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER } from 'rxjs';
import { GamesService } from '../games.service';
import { gameattributes } from '../Models/game.model';

@Component({
  selector: 'app-gameappdisplay',
  templateUrl: './gameappdisplay.component.html',
  styleUrls: ['./gameappdisplay.component.css']
})
export class GameappdisplayComponent implements OnInit {

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
  constructor(private ActivRouter:ActivatedRoute,private Ser2:GamesService) { }

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
