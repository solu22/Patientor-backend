export interface Diagnosis{
    code: string;
    name: string;
    latin?: string;

}

// eslint-disable-next-line @typescript-eslint/no-empty-interface


export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];

}

export enum Gender {
   Male='male',
   Female='female',
   Other='other'
}

export type NonSensitiveEntry = Omit<Patient, 'ssn'>;
export type NewPatientEntry = Omit<Patient, 'id'>;
export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;


export interface BaseEntry{
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis['code']>
}

export enum HealthCheckRating{
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk"= 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry{
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;

}

interface HospitalEntry extends BaseEntry{
  type: "Hospital"
  discharge?:{
    date: string,
    criteria: string
  }

}

interface OccupationalHealthCareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string,
  sickLeave?: {
    startDate: string,
    endDate: string
  }
}

export type Entry = HospitalEntry | OccupationalHealthCareEntry | HealthCheckEntry;


