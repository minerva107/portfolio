import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'email',   component: EmailComponent },
  {path: 'aboutme',   component: AboutmeComponent },
  {path: 'paginaprincipal',   component: PaginaprincipalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
