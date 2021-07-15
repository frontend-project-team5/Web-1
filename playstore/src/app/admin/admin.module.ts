import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewgamesComponent } from './viewgames/viewgames.component';
import { ViewappsComponent } from './viewapps/viewapps.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { GamecardComponent } from './gamecard/gamecard.component';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';
import { EditgameComponent } from './editgame/editgame.component';


@NgModule({
  declarations: [
    AdminComponent,
    ViewgamesComponent,
    ViewappsComponent,
    ViewbooksComponent,
    ViewmoviesComponent,
    GamecardComponent,
    GamedisplayComponent,
    EditgameComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class AdminModule { }
