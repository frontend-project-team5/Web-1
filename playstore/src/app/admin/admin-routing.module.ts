import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditgameComponent } from './editgame/editgame.component';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';
import { ViewappsComponent } from './viewapps/viewapps.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { ViewgamesComponent } from './viewgames/viewgames.component';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';

const routes: Routes = [{ path: '', component: AdminComponent ,children:[
  {path:"viewgames",component:ViewgamesComponent,children:[
    {path:"viewgames/:id",component:GamedisplayComponent}
  ]},
  {path:"viewapps",component:ViewappsComponent},
  {path:"viewmovies",component:ViewmoviesComponent},
  {path:"viewbooks",component:ViewbooksComponent},
  {path:"editgame/:id",component:EditgameComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
