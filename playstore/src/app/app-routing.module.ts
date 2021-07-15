import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { GameappdisplayComponent } from './gameappdisplay/gameappdisplay.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { MyappsComponent } from './myapps/myapps.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { MymoviesComponent } from './mymovies/mymovies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"myapps",component:MyappsComponent},
  {path:"mybooks",component:MybooksComponent},
  {path:"mymovies",component:MymoviesComponent},
  {path:"body",component:BodyComponent},
  {path:"games",component:GamesComponent},
  {path:"games/:id",component:GameappdisplayComponent},
  {path:"signin",component:SigninComponent},
  {path:"games",component:GamesComponent},
  {path:"signup",component:RegisterComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AdminGuard] },
  {path:':id',component:GameappdisplayComponent},
  {path:'user-profile/:name',component:UserProfileComponent,children:[{path:"games",component:GamesComponent},
  {path:'',redirectTo:'games',pathMatch:'full'}]},
  { path: 'user-profile/:name/library', loadChildren: () => import('./library/library.module').then(m => m.LibraryModule) },
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
