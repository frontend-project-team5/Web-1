import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Observable, observable, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { parammeters } from '../Models/param.model';
import { displaygame } from '../Models/displaygame.model';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gameList= new Observable<displaygame[]>();
  gameListForCorsal:Array<displaygame>=[];
  gameCategory:string="racing";
  gamePlatform:string="all";
  gameSortby:string="relevance";
  tempPara:any;
  usab:any;
  alpha:parammeters={
    platform:this.gamePlatform,
    category:this.gameCategory,
    "sort-by":this.gameSortby,
  };

  constructor(private obj: GamesService) { 
    
  }

  tags: any = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'];
 
  ngOnInit(): void {
    
    this.gameList = this.obj.getGamesData();

     this.usab=this.obj.getGamesData().subscribe(
      res=>{
        this.gameListForCorsal=res.slice(1,6);
        console.log(this.gameListForCorsal)
      }
    )
    

  }

  gameFilter() {
    this.alpha.platform=this.gamePlatform;
    this.alpha.category=this.gameCategory;
    this.alpha['sort-by']=this.gameSortby;
    this.gameList = this.obj.getGamesByoption(this.alpha)
  }

}
