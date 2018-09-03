import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace test{
   export class Courses {
      CName: string;
      CPayment: string;
      Duration: string;
   }
   export class Test {
      score: number;
   }
   export enum Partners {
      Partner_Delivery,
      Partner_Labs,
      Partner_Project,
   }
   export enum Endorse {
      True,
      False,
   }
   export enum Transport {
      CAR,
      BUS,
   }
   export class UniversityAccount extends Asset {
      accountId: string;
      owner: University;
      balance: number;
      timePeriod: number;
   }
   export class StudentAccount extends Asset {
      PortalID: string;
      balance: number;
      c: Courses;
      timePeriod: number;
   }
   export class TrainingInstituteAccount extends Asset {
      accountId: string;
      owner: TrainingInstitute;
      balance: number;
      timePeriod: number;
   }
   export class TrainingPartnerAccount extends Asset {
      accountId: string;
      owner: TrainingPartner;
      balance: number;
   }
   export class Student extends Participant {
      sapID: string;
      Name: string;
   }
   export class University extends Participant {
      uid: string;
      Name: string;
   }
   export class TrainingInstitute extends Participant {
      tid: string;
      Name: string;
   }
   export class TrainingPartner extends Participant {
      tpid: string;
      Name: string;
      ptype: Partners;
   }
   export class StudentToUniversity extends Transaction {
      from: StudentAccount;
      to: StudentAccount;
      Amount: number;
   }
   export class UniversityToTrainingInstitute extends Transaction {
      from: UniversityAccount;
      to: TrainingInstituteAccount;
      amount: number;
   }
   export class TrainingInstitueToTrainingPartner extends Transaction {
      from: TrainingInstituteAccount;
      to: TrainingPartnerAccount;
      amount: number;
   }
   export class RefundUniversityToStudent extends Transaction {
      from: UniversityAccount;
      to: StudentAccount;
      amount: number;
   }
   export class RefundInstituteToUniversity extends Transaction {
      from: TrainingInstituteAccount;
      to: UniversityAccount;
      amount: number;
   }
   export class LatePaymentStudentToUniversity extends Transaction {
      from: StudentAccount;
      to: UniversityAccount;
      amount: number;
   }
   export class LatePaymentUniversityToTrainingInstitute extends Transaction {
      from: UniversityAccount;
      to: TrainingInstitute;
      amount: number;
   }
// }

