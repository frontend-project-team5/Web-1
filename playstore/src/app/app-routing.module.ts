import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { MyappsComponent } from './myapps/myapps.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { MymoviesComponent } from './mymovies/mymovies.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"myapps",component:MyappsComponent},
  {path:"mybooks",component:MybooksComponent},
  {path:"mymovies",component:MymoviesComponent},
  {path:"games",component:GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
