import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import  {MainPageComponent} from './security/main-page/main-page.component';
import {NethomeComponent} from './network/nethome/nethome.component'
import {SaseComponent} from './security/sase/sase.component'
import {CloudsecurityComponent} from './security/cloudsecurity/cloudsecurity.component'
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'network', component: NethomeComponent},
  {path:'security', component: MainPageComponent},
  {path:'sase',component: SaseComponent},
  {path:'cloudsecurity', component:CloudsecurityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
