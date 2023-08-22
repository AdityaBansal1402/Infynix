import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NethomeComponent } from './nethome/nethome.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SdwannetComponent } from './sdwannet/sdwannet.component';
import { ManagedservicesComponent } from './managedservices/managedservices.component';



@NgModule({
  declarations: [
    NethomeComponent,
    EnterpriseComponent,
    SdwannetComponent,
    ManagedservicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NetworkModule { }
