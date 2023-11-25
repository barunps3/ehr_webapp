import { GENDER, NATIONALID, HOSPITALDEPT } from './constants'

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
  InPatient: boolean
  CurrentDept: HOSPITALDEPT
  Comments: string
}


