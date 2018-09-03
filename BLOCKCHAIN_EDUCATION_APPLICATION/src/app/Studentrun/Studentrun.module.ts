/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by Studentrunlicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
Universityrun
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentrunRoutingModule } from './Studentrun-routing.module';
import { DataService } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/data.service';
import { StudentrunComponent } from './Studentrun.component';
import { HomeComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/home/home.component';

import { UniversityAccountComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/UniversityAccount/UniversityAccount.component';
import { StudentAccountComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/StudentAccount/StudentAccount.component';
import { TrainingInstituteAccountComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/TrainingInstituteAccount/TrainingInstituteAccount.component';
import { TrainingPartnerAccountComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/TrainingPartnerAccount/TrainingPartnerAccount.component';

import { StudentComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/Student/Student.component';
import { UniversityComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/University/University.component';
import { TrainingInstituteComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/TrainingInstitute/TrainingInstitute.component';
import { TrainingPartnerComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/TrainingPartner/TrainingPartner.component';
import { UniversityrunComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/Universityrun/Universityrun.component';

import { StudentToUniversityComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/StudentToUniversity/StudentToUniversity.component';
import { UniversityToTrainingInstituteComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/UniversityToTrainingInstitute/UniversityToTrainingInstitute.component';
import { TrainingInstitueToTrainingPartnerComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/TrainingInstitueToTrainingPartner/TrainingInstitueToTrainingPartner.component';
import { RefundUniversityToStudentComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/RefundUniversityToStudent/RefundUniversityToStudent.component';
import { RefundInstituteToUniversityComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/RefundInstituteToUniversity/RefundInstituteToUniversity.component';
import { LatePaymentStudentToUniversityComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/LatePaymentStudentToUniversity/LatePaymentStudentToUniversity.component';
import { LatePaymentUniversityToTrainingInstituteComponent } from '/home/tanujjoshi/University_Engagement_Lifecycle/ibm/IBM_BlockChain_Education_Application/src/app/LatePaymentUniversityToTrainingInstitute/LatePaymentUniversityToTrainingInstitute.component';

  @NgModule({
  declarations: [
    StudentrunComponent,
    HomeComponent,
    UniversityAccountComponent,
    StudentAccountComponent,
    TrainingInstituteAccountComponent,
    TrainingPartnerAccountComponent,
    StudentComponent,
    UniversityComponent,
    TrainingInstituteComponent,
    TrainingPartnerComponent,
    StudentToUniversityComponent,
    UniversityToTrainingInstituteComponent,
    TrainingInstitueToTrainingPartnerComponent,
    RefundUniversityToStudentComponent,
    RefundInstituteToUniversityComponent,
    LatePaymentStudentToUniversityComponent,
    LatePaymentUniversityToTrainingInstituteComponent,
    UniversityrunComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StudentrunRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [StudentrunComponent]
})
export class StudentrunModule { }
