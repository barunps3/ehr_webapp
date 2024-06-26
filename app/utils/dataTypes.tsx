import { NationalId } from './constants'
import { DefaultPatientFormData, EmptyPatientBasicInfo } from './defaults'

export type PatientFormData = typeof DefaultPatientFormData

export type searchParams = {
  idType: NationalId,
  idValue: string
}

export type PatientBasicInfo = typeof EmptyPatientBasicInfo

export type ReportFiles = {
  PatientUUID: string,
  Xrays: string[],
  MRIScans: string[],
  CTScans: string[],
}

export type Xray = {
  Id: string,
  UploadDate: string,
  UploadedBy: string,
  PatientUUID: string,
  BlobUrl: string
}