/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { UniversityAccountComponent } from './UniversityAccount/UniversityAccount.component';
import { StudentAccountComponent } from './StudentAccount/StudentAccount.component';
import { TrainingInstituteAccountComponent } from './TrainingInstituteAccount/TrainingInstituteAccount.component';
import { TrainingPartnerAccountComponent } from './TrainingPartnerAccount/TrainingPartnerAccount.component';

import { StudentComponent } from './Student/Student.component';
import { UniversityComponent } from './University/University.component';
import { TrainingInstituteComponent } from './TrainingInstitute/TrainingInstitute.component';
import { TrainingPartnerComponent } from './TrainingPartner/TrainingPartner.component';
import { UniversityrunComponent } from './Universityrun/Universityrun.component';
import { StudentrunComponent } from './Studentrun/Studentrun.component';
import { TrainingInstituterunComponent } from './TrainingInstituterun/TrainingInstituterun.component';
import { TrainingPartner_runComponent } from './TrainingPartner_run/TrainingPartner_run.component';

import { StudentToUniversityComponent } from './StudentToUniversity/StudentToUniversity.component';
import { UniversityToTrainingInstituteComponent } from './UniversityToTrainingInstitute/UniversityToTrainingInstitute.component';
import { TrainingInstitueToTrainingPartnerComponent } from './TrainingInstitueToTrainingPartner/TrainingInstitueToTrainingPartner.component';
import { RefundUniversityToStudentComponent } from './RefundUniversityToStudent/RefundUniversityToStudent.component';
import { RefundInstituteToUniversityComponent } from './RefundInstituteToUniversity/RefundInstituteToUniversity.component';
import { LatePaymentStudentToUniversityComponent } from './LatePaymentStudentToUniversity/LatePaymentStudentToUniversity.component';
import { LatePaymentUniversityToTrainingInstituteComponent } from './LatePaymentUniversityToTrainingInstitute/LatePaymentUniversityToTrainingInstitute.component';

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
  { path: 'Studentrun', component: StudentrunComponent },
  { path: 'TrainingInstituterun', component: TrainingInstituterunComponent },
  { path: 'TrainingPartner_run', component: TrainingPartner_runComponent },


  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
