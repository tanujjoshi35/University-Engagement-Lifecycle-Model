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
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'UniversityAccount', component: UniversityAccountComponent },
  { path: 'StudentAccount', component: StudentAccountComponent },
  { path: 'TrainingInstituteAccount', component: TrainingInstituteAccountComponent },
  { path: 'TrainingPartnerAccount', component: TrainingPartnerAccountComponent },
  { path: 'Student', component: StudentComponent },
  { path: 'University', component: UniversityComponent },
  { path: 'TrainingInstitute', component: TrainingInstituteComponent },
  { path: 'TrainingPartner', component: TrainingPartnerComponent },
  { path: 'StudentToUniversity', component: StudentToUniversityComponent },
  { path: 'UniversityToTrainingInstitute', component: UniversityToTrainingInstituteComponent },
  { path: 'TrainingInstitueToTrainingPartner', component: TrainingInstitueToTrainingPartnerComponent },
  { path: 'RefundUniversityToStudent', component: RefundUniversityToStudentComponent },
  { path: 'RefundInstituteToUniversity', component: RefundInstituteToUniversityComponent },
  { path: 'LatePaymentStudentToUniversity', component: LatePaymentStudentToUniversityComponent },
  { path: 'LatePaymentUniversityToTrainingInstitute', component: LatePaymentUniversityToTrainingInstituteComponent },
  { path: 'Universityrun', component: UniversityrunComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class StudentrunRoutingModule { }
