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

  gamedata :any;
  UserSubscription:any;
  constructor(private ActivRouter:ActivatedRoute,private Ser2:GamesService) { }

  ngOnInit(): void {
    let ind=this.ActivRouter.snapshot.params.id;
   this.UserSubscription= this.Ser2.SendGamesData(ind).subscribe(
      UserObjet =>{
        this.gamedata=UserObjet
      },
      err=>{
        console.log('Erroen eccored ' ,err);
      }
    )
  }
}
