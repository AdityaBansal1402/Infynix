import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import  {MainPageComponent} from './security/main-page/main-page.component';
import {NethomeComponent} from './network/nethome/nethome.component'
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'network', component: NethomeComponent},
  {path:'security', component: MainPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
