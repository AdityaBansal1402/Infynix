import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { VerticalmainpageComponent } from './verticalmainpage/verticalmainpage.component';
import { ItComponent } from './it/it.component';



@NgModule({
  declarations: [
    ManufacturingComponent,
    VerticalmainpageComponent,
    ItComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VerticalsModule { }
