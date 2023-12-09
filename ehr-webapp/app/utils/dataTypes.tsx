import { NATIONALID } from './constants'
import { DefaultPatientFormData, EmptyPatientBasicInfo } from './defaults'

export type PatientFormData = typeof DefaultPatientFormData

export type searchParams = {
  idType: NATIONALID,
  idValue: string
}

export type FetchedPatientBasicInfo = typeof EmptyPatientBasicInfo