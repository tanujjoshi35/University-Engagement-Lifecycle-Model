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

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for IBM_BlockChain_Education_Application', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be IBM_BlockChain_Education_Application', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('IBM_BlockChain_Education_Application');
    })
  });

  it('network-name should be ibm@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('ibm@0.0.1.bna');
    });
  });

  it('navbar-brand should be IBM_BlockChain_Education_Application',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('IBM_BlockChain_Education_Application');
    });
  });

  
    it('UniversityAccount component should be loadable',() => {
      page.navigateTo('/UniversityAccount');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('UniversityAccount');
      });
    });

    it('UniversityAccount table should have 5 columns',() => {
      page.navigateTo('/UniversityAccount');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('StudentAccount component should be loadable',() => {
      page.navigateTo('/StudentAccount');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('StudentAccount');
      });
    });

    it('StudentAccount table should have 5 columns',() => {
      page.navigateTo('/StudentAccount');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('TrainingInstituteAccount component should be loadable',() => {
      page.navigateTo('/TrainingInstituteAccount');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TrainingInstituteAccount');
      });
    });

    it('TrainingInstituteAccount table should have 5 columns',() => {
      page.navigateTo('/TrainingInstituteAccount');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('TrainingPartnerAccount component should be loadable',() => {
      page.navigateTo('/TrainingPartnerAccount');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TrainingPartnerAccount');
      });
    });

    it('TrainingPartnerAccount table should have 4 columns',() => {
      page.navigateTo('/TrainingPartnerAccount');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Student component should be loadable',() => {
      page.navigateTo('/Student');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Student');
      });
    });

    it('Student table should have 3 columns',() => {
      page.navigateTo('/Student');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('University component should be loadable',() => {
      page.navigateTo('/University');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('University');
      });
    });

    it('University table should have 3 columns',() => {
      page.navigateTo('/University');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('TrainingInstitute component should be loadable',() => {
      page.navigateTo('/TrainingInstitute');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TrainingInstitute');
      });
    });

    it('TrainingInstitute table should have 3 columns',() => {
      page.navigateTo('/TrainingInstitute');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('TrainingPartner component should be loadable',() => {
      page.navigateTo('/TrainingPartner');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TrainingPartner');
      });
    });

    it('TrainingPartner table should have 4 columns',() => {
      page.navigateTo('/TrainingPartner');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('StudentToUniversity component should be loadable',() => {
      page.navigateTo('/StudentToUniversity');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('StudentToUniversity');
      });
    });
  
    it('UniversityToTrainingInstitute component should be loadable',() => {
      page.navigateTo('/UniversityToTrainingInstitute');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('UniversityToTrainingInstitute');
      });
    });
  
    it('TrainingInstitueToTrainingPartner component should be loadable',() => {
      page.navigateTo('/TrainingInstitueToTrainingPartner');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TrainingInstitueToTrainingPartner');
      });
    });
  
    it('RefundUniversityToStudent component should be loadable',() => {
      page.navigateTo('/RefundUniversityToStudent');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RefundUniversityToStudent');
      });
    });
  
    it('RefundInstituteToUniversity component should be loadable',() => {
      page.navigateTo('/RefundInstituteToUniversity');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RefundInstituteToUniversity');
      });
    });
  
    it('LatePaymentStudentToUniversity component should be loadable',() => {
      page.navigateTo('/LatePaymentStudentToUniversity');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('LatePaymentStudentToUniversity');
      });
    });
  
    it('LatePaymentUniversityToTrainingInstitute component should be loadable',() => {
      page.navigateTo('/LatePaymentUniversityToTrainingInstitute');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('LatePaymentUniversityToTrainingInstitute');
      });
    });
  

});