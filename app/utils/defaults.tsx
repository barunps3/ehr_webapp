import { Gender, NationalId, HospitalDept, CareType } from './constants'
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
  Gender: Gender.Male,
  DateOfBirth: "",
  InsuranceId: "",
  PhoneNum: "",
  EmergencyPhoneNum: "",
  Address: "",
  NationalIDType: NationalId.AadharCard,
  NationalIDValue: "",
  PatientUUID: uuidv4(),
  InPatient: CareType.OutPatient,
  CurrentDept: HospitalDept.GenPhysician,
  Comments: ""
}

export const DefaultFolderName = {
  Xrays: "X-Rays",
  MRIScans: "MRI Scans",
  CTScans: "CT Scans"
}