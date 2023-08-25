import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudMainComponent } from './cloud-main/cloud-main.component';
import { CloudHostedAppComponent } from './cloud-hosted-app/cloud-hosted-app.component';
import { CloudSecurityComponent } from './cloud-security/cloud-security.component';
import { CloudStorageComponent } from './cloud-storage/cloud-storage.component';
import { CloudAzureComponent } from './cloud-azure/cloud-azure.component';
import { AwsComponent } from './aws/aws.component';



@NgModule({
  declarations: [
    CloudMainComponent,
    CloudHostedAppComponent,
    CloudSecurityComponent,
    CloudStorageComponent,
    CloudAzureComponent,
    AwsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CloudModule { }
