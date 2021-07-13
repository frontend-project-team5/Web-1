import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { displaygame } from './Models/displaygame.model';
import { gameattributes } from './Models/game.model';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private hc:HttpClient) { }
  getGamesData():Observable<displaygame>
  { const param={
  }
  const header={
    "x-rapidapi-key": "a49daffd5cmshdb903c07167a132p18d870jsnf36f28c9a297",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
  }
    return this.hc.get<displaygame>("https://free-to-play-games-database.p.rapidapi.com/api/games",{headers:header,params:param});
  }

  SendGamesData(ind:string):Observable<gameattributes>{
    { const param={
      "id": ind,
      }
      const header={
        "x-rapidapi-key": '434981b1b6msh6e940cb68fdaae2p17a0f7jsn2bd7620567b7',
        "x-rapidapi-host": 'free-to-play-games-database.p.rapidapi.com'
      }
        return this.hc.get<gameattributes>("https://free-to-play-games-database.p.rapidapi.com/api/game",{headers:header,params:param});
    }
  }

  getGamesByoption(p:any):Observable<displaygame>
  { const param=p
    const header={
      "x-rapidapi-key": "a49daffd5cmshdb903c07167a132p18d870jsnf36f28c9a297",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }
      return this.hc.get<displaygame>("https://free-to-play-games-database.p.rapidapi.com/api/games",{headers:header,params:param});
    }



}
