import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(gameList:any[],searchTerm:string): any[] {
    if(!gameList || !searchTerm){
        return gameList;
    }
    else{
      return gameList.filter(gameobj=>gameobj.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
  }

}
