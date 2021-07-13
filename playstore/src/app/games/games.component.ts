import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Subscription} from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private obj:GamesService) { }
  gameslist:any;
  gameListForCorsal:any=[];
  tags:any=['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social','sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'];
  ngOnInit(): void {
   this.gameslist=this.obj.getGamesData().subscribe(
     info=>{this.gameslist=info;      
    },
     err=>{console.log("error=",err)}     
   )
  }

  gameFilter(ref:NgForm){
    this.gameslist=this.obj.getGamesByoption(ref.value).subscribe(
      info=>{this.gameslist=info;
     },
      err=>{console.log("error=",err)}     
    )
  }

}
