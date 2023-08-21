import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import  {MainPageComponent} from './security/main-page/main-page.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'security', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
