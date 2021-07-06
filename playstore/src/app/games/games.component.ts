import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private obj:GamesService) { }
  gameslist:any;
  ngOnInit(): void {
   this.gameslist=this.obj.getGamesData().subscribe(
     info=>{this.gameslist=info;
    console.log(this.gameslist)},
     err=>{console.log("error=",err)}     
   )
  }

}
