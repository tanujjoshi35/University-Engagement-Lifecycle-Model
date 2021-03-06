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
Universityrun
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
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

  @NgModule({
  declarations: [
    AppComponent,
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
    UniversityrunComponent,
    StudentrunComponent,
    TrainingInstituterunComponent,
    TrainingPartner_runComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
