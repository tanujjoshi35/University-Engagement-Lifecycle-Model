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

/* global getAssetRegistry getFactory emit */


/**
* Sample transaction
* @param {test.UniversityToTrainingInstitute} accountTransfer
* @transaction
*/

function accountTransfer(accountTransfer) {
if (accountTransfer.from.balance < accountTransfer.amount) {
throw new Error ("Insufficient funds");
}
accountTransfer.from.balance -= accountTransfer.amount;
accountTransfer.to.balance += accountTransfer.amount;
return getAssetRegistry('test.UniversityAccount')
.then (function (assetRegistry) {
return assetRegistry.update(accountTransfer.from);
})
.then (function () {
return getAssetRegistry('test.TrainingInstituteAccount');
})
.then(function (assetRegistry) {
return assetRegistry.update(accountTransfer.to);
});
}



/**
* Sample transaction
* @param {test.TrainingInstitueToTrainingPartner} fundTransfer
* @transaction
*/

function fundTransfer(fundTransfer) {
  
  window.alert("Are you sure want to transfer the amount....");
  
if (fundTransfer.from.balance < fundTransfer.amount) {
throw new Error ("Insufficient funds");
}
fundTransfer.from.balance -= fundTransfer.amount;
fundTransfer.to.balance += fundTransfer.amount;
return getAssetRegistry('test.TrainingInstituteAccount')
.then (function (assetRegistry) {
return assetRegistry.update(fundTransfer.from);
})
.then (function () {
return getAssetRegistry('test.TrainingPartnerAccount');
})
.then(function (assetRegistry) {
return assetRegistry.update(fundTransfer.to);
});
}

/**
* Sample transaction
* @param {test.StudentToUniversity} feesTransfer
* @transaction
*/

function feesTransfer(feesTransfer){
   window.alert("Are you sure want to transfer the amount....");
  
  
if (feesTransfer.from.balance < feesTransfer.amount) {
throw new Error ("Insufficient balance");
}
feesTransfer.from.balance -= feesTransfer.amount;
feesTransfer.to.balance += feesTransfer.amount;
return getAssetRegistry('test.UniversityAccount')
.then (function (assetRegistry) {
return assetRegistry.update(feesTransfer.from);
})
.then (function () {
return getAssetRegistry('test.TrainingInstituteAccount');
})
.then(function (assetRegistry) {
return assetRegistry.update(feesTransfer.to);
});
}

/**
* Sample transaction
* @param {test.RefundUniversityToStudent} refundUS
* @transaction
*/

function refundUS(refundUS){
   window.alert("Are you sure want to ask for refund ....");
  
if (refundUS.from.balance < refundUS.amount) {
throw new Error ("Insufficient balance");
}
  if(refundUS.to.timePeriod <=7){
    window.alert("Didn't like the course");//Refund is transferred to each student who has applied for it.
    //refundUS.amount+=500 ;
refundUS.from.balance -= refundUS.amount;
refundUS.to.balance += refundUS.amount;
return getAssetRegistry('test.UniversityAccount')
.then (function (assetRegistry) {
return assetRegistry.update(refundUS.from);
})
.then (function () {
return getAssetRegistry('test.StudentAccount');
})
.then(function (assetRegistry) {
return assetRegistry.update(refundUS.to);
});}
}


/**
* Sample transaction
* @param {test.RefundInstituteToUniversity} refundIU
* @transaction
*/

function refundIU(refundIU){
   window.alert("Are you sure want to transfer the amount for refund....");
  
if (refundIU.from.balance < refundIU.amount) {
throw new Error ("Insufficient balance");
}
  if(refundIU.to.timePeriod <=7){
    window.alert("Sending the refund amount.");
    //refundIU.amount+=10000; //How to calculate the amount for several students
refundIU.from.balance -= refundIU.amount;
refundIU.to.balance += refundIU.amount;
return getAssetRegistry('test.TrainingInstituteAccount')
.then (function (assetRegistry) {
return assetRegistry.update(refundIU.from);
})
.then (function () {
return getAssetRegistry('test.UniversityAccount');
})
.then(function (assetRegistry) {
return assetRegistry.update(refundIU.to);
});}
}

/**
* Sample transaction
* Sample transaction
* @param {test.LatePaymentStudentToUniversity} latePaymentSU
* @transaction
*/
function latePaymentSU(latePaymentSU){
  if(latePaymentSU.from.timePeriod>latePaymentSU.to.timePeriod){
    latePaymentSU.amount+=(latePaymentSU.from.timePeriod-latePaymentSU.to.timePeriod)*500;
    latePaymentSU.from.balance -= latePaymentSU.amount; //How to do it for each student
latePaymentSU.to.balance += latePaymentSU.amount;
return getAssetRegistry('test.StudentAccount')
.then (function (assetRegistry) {
return assetRegistry.update(latePaymentSU.from);
})
.then (function () {
return getAssetRegistry('test.UniversityAccount');
})
.then(function (assetRegistry) {
return assetRegistry.update(latePaymentSU.to);
});
  }
}

/**
* Sample transaction
* @param {test.LatePaymentUniversityToTrainingInstitute} latePaymentUI
* @transaction
*/

function latePaymentUI(latePaymentUI){
  if(latePaymentUI.from.timePeriod>latePaymentUI.to.timePeriod){
    latePaymentUI.amount+=(latePaymentSU.from.timePeriod-latePaymentUI.to.timePeriod)*1000;
    latePaymentUI.from.balance -= latePaymentUI.amount; //How to do it for each student
latePaymentUI.to.balance += latePaymentUI.amount;
return getAssetRegistry('test.UniversityAccount')
.then (function (assetRegistry) {
return assetRegistry.update(latePaymentUI.from);
})
.then (function () {
return getAssetRegistry('test.TrainingInstituteAccount');
})
.then(function (assetRegistry) {
return assetRegistry.update(latePaymentUI.to);
});
  }
}

