/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by TrainingInstituterunlicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TrainingInstituterunComponent } from './TrainingInstituterun.component';

describe('TrainingInstituterunComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TrainingInstituterunComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the TrainingInstituterun', async(() => {
    const fixture = TestBed.createComponent(TrainingInstituterunComponent);
    const TrainingInstituterun = fixture.debugElement.componentInstance;
    expect(TrainingInstituterun).toBeTruthy();
  }));

  it(`should have as title 'TrainingInstituterun works!'`, async(() => {
    const fixture = TestBed.createComponent(TrainingInstituterunComponent);
    const TrainingInstituterun = fixture.debugElement.componentInstance;
    expect(TrainingInstituterun.title).toEqual('TrainingInstituterun works!');
  }));

});
