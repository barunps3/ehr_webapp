import { GENDER, NATIONALID, HOSPITALDEPT, CARETYPE } from './constants'
import {v4 as uuidv4} from 'uuid';

export const EmptyPatientBasicInfo = {
  UUID: "",
  FirstName: "",
  LastName: "",
  Gender: "",
  DateOfBirth: "",
  InsuranceId: "",
  PhoneNum: "",
  EmergencyPhoneNum: "",
  Address: "",
  CurrentDept: "",
  CurrentCare: ""
} 

export const DefaultPatientFormData = {
  FirstName: "",
  LastName: "",
  Gender: GENDER.Male,
  DateOfBirth: "",
  InsuranceId: "",
  PhoneNum: "",
  EmergencyPhoneNum: "",
  Address: "",
  NationalIDType: NATIONALID.AadharCard,
  NationalIDValue: "",
  PatientUUID: uuidv4(),
  InPatient: CARETYPE.OutPatient,
  CurrentDept: HOSPITALDEPT.GenPhysician,
  Comments: ""
}
