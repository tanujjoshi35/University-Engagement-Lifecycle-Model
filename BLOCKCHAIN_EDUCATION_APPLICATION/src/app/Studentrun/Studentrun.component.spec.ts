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

/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentrunComponent } from './Studentrun.component';

describe('StudentrunComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        StudentrunComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the Studentrun', async(() => {
    const fixture = TestBed.createComponent(StudentrunComponent);
    const Studentrun = fixture.debugElement.componentInstance;
    expect(Studentrun).toBeTruthy();
  }));

  it(`should have as title 'Studentrun works!'`, async(() => {
    const fixture = TestBed.createComponent(StudentrunComponent);
    const Studentrun = fixture.debugElement.componentInstance;
    expect(Studentrun.title).toEqual('Studentrun works!');
  }));

});
