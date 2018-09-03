/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by TrainingPartner_runlicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TrainingPartner_runComponent } from './TrainingPartner_run.component';

describe('TrainingPartner_runComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TrainingPartner_runComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the TrainingPartner_run', async(() => {
    const fixture = TestBed.createComponent(TrainingPartner_runComponent);
    const TrainingPartner_run = fixture.debugElement.componentInstance;
    expect(TrainingPartner_run).toBeTruthy();
  }));

  it(`should have as title 'TrainingPartner_run works!'`, async(() => {
    const fixture = TestBed.createComponent(TrainingPartner_runComponent);
    const TrainingPartner_run = fixture.debugElement.componentInstance;
    expect(TrainingPartner_run.title).toEqual('TrainingPartner_run works!');
  }));

});
