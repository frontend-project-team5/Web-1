import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectbodyComponent } from './projectbody/projectbody.component';
import { BodyComponent } from './body/body.component';
import { MyappsComponent } from './myapps/myapps.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { MymoviesComponent } from './mymovies/mymovies.component';
import { MygamesComponent } from './mygames/mygames.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { GamesComponent } from './games/games.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ProjectbodyComponent,
    BodyComponent,
    MyappsComponent,
    MybooksComponent,
    MymoviesComponent,
    MygamesComponent,
    HomeComponent,
    PagenotfoundComponent,
    SigninComponent,
    RegisterComponent,
    GamesComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
