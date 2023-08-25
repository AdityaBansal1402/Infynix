import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { VerticalmainpageComponent } from './verticalmainpage/verticalmainpage.component';
import { ItComponent } from './it/it.component';
import { AutomobileComponent } from './automobile/automobile.component';
import { ResidentialComponent } from './residential/residential.component';
import { CoworkingComponent } from './coworking/coworking.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { StartupsComponent } from './startups/startups.component';
import { EducationalComponent } from './educational/educational.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';



@NgModule({
  declarations: [
    ManufacturingComponent,
    VerticalmainpageComponent,
    ItComponent,
    AutomobileComponent,
    ResidentialComponent,
    CoworkingComponent,
    LogisticsComponent,
    StartupsComponent,
    EducationalComponent,
    HospitalityComponent,
    EcommerceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VerticalsModule { }
