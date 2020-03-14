import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Componente3Component } from './componente3/componente3.component';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';

const appRoutes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'paginaprincipal',      component: PaginaprincipalComponent }

];


@NgModule ({
  declarations: [
    AppComponent,
    PaginaprincipalComponent,
    NavbarComponent,
    Componente3Component,
    HomeComponent,
    EmailComponent,
    AboutmeComponent,
    SocialmediaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
