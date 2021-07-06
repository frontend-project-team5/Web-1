import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private hc:HttpClient) { }
  getGamesData():Observable<any>
  { const params={
	"category": "shooter",
	"sort-by": "release-date"
  }
  const header={
    "x-rapidapi-key": "a49daffd5cmshdb903c07167a132p18d870jsnf36f28c9a297",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
  }
    return this.hc.get("https://free-to-play-games-database.p.rapidapi.com/api/games",{headers:header,params:params});
  }
}
