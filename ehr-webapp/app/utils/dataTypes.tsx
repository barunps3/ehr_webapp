import { NATIONALID } from './constants'
import { DefaultPatientFormData, EmptyPatientBasicInfo } from './defaults'

export type PatientFormData = typeof DefaultPatientFormData

export type searchParams = {
  idType: NATIONALID,
  idValue: string
}

export type PatientBasicInfo = typeof EmptyPatientBasicInfo

export type ReportFiles = {
  Xray: string[],
  MRIScans: string[],
  CTScans: string[],
}