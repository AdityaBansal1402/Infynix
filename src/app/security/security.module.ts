import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SaseComponent } from './sase/sase.component';
import { CloudsecurityComponent } from './cloudsecurity/cloudsecurity.component';



@NgModule({
  declarations: [
    MainPageComponent,
    SaseComponent,
    CloudsecurityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecurityModule { }
