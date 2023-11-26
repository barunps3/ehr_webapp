import { GENDER, NATIONALID, HOSPITALDEPT, CARETYPE } from './constants'

export type PatientFormData = {
  FirstName: string
  LastName: string
  Gender: GENDER.Male | GENDER.Female | GENDER.Other
  DateOfBirth: string
  InsuranceId: string
  PhoneNum: string
  EmergencyPhoneNum: string
  Address: string
  NationalIDType: NATIONALID
  NationalIDValue: string
  PatientUUID: string
  InPatient: CARETYPE
  CurrentDept: HOSPITALDEPT
  Comments: string
}


