import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import  {MainPageComponent} from './security/main-page/main-page.component';
import {NethomeComponent} from './network/nethome/nethome.component'
import {SaseComponent} from './security/sase/sase.component'
import {CloudsecurityComponent} from './security/cloudsecurity/cloudsecurity.component'
import { EnterpriseComponent } from './network/enterprise/enterprise.component';
import { SdwannetComponent } from './network/sdwannet/sdwannet.component';
import { ManagedservicesComponent } from './network/managedservices/managedservices.component';
import { TransformativeComponent } from './network/transformative/transformative.component';
import { CloudMainComponent } from './cloud/cloud-main/cloud-main.component';
import { CloudHostedAppComponent } from './cloud/cloud-hosted-app/cloud-hosted-app.component';
import { CloudSecurityComponent } from './cloud/cloud-security/cloud-security.component';
import { CloudStorageComponent } from './cloud/cloud-storage/cloud-storage.component';
import { CloudAzureComponent } from './cloud/cloud-azure/cloud-azure.component';
import { VerticalmainpageComponent } from './verticals/verticalmainpage/verticalmainpage.component';
import { ManufacturingComponent } from './verticals/manufacturing/manufacturing.component';
import { ItComponent } from './verticals/it/it.component';
import { AutomobileComponent } from './verticals/automobile/automobile.component';
import { CoworkingComponent } from './verticals/coworking/coworking.component';
import { EcommerceComponent } from './verticals/ecommerce/ecommerce.component';
import { EducationalComponent } from './verticals/educational/educational.component';
import { ResidentialComponent } from './verticals/residential/residential.component';
import { StartupsComponent } from './verticals/startups/startups.component';
import { HospitalityComponent } from './verticals/hospitality/hospitality.component';
import { LogisticsComponent } from './verticals/logistics/logistics.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'network', component: NethomeComponent},
  {path:'security', component: MainPageComponent},
  {path:'sase',component: SaseComponent},
  {path:'cloudsecurity', component:CloudsecurityComponent},
  {path:'enterprise', component:EnterpriseComponent},
  {path:'sdwannet', component:SdwannetComponent},
  {path:'netservice',component:ManagedservicesComponent},
  {path:'transform', component:TransformativeComponent},
  {path:'cloud',component:CloudMainComponent},
  {path:'cloud-hosted-app',component:CloudHostedAppComponent},
  {path:'cloud-security', component:CloudSecurityComponent},
  {path:'cloud-storage', component:CloudStorageComponent},
  {path:'Azure',component: CloudAzureComponent},
  {path: 'verticalmainpage', component:VerticalmainpageComponent},
  {path: 'manufacturing', component:ManufacturingComponent},
  {path: 'it', component:ItComponent},
  {path: 'automobile', component: AutomobileComponent},
  {path: 'coworking', component:CoworkingComponent},
  {path: 'ecommerce', component:EcommerceComponent},
  {path: 'educational', component:EducationalComponent},
  {path: 'hospitality', component:HospitalityComponent},
  {path: 'logistics', component:LogisticsComponent},
  {path: 'residential', component:ResidentialComponent},
  {path: 'startups', component:StartupsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
