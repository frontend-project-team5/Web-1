import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
