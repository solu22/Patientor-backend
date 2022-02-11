import { v4 as uuidv4 } from 'uuid';
import data from "../../data/patients.json";

import { NonSensitiveEntry, NewPatientEntry, Patient } from "../types";

const patientsData: Array<Patient> = data as Array<Patient>;

const getNonSensitiveEntries = (): Array<NonSensitiveEntry> => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addNewPatients = (entry: NewPatientEntry): Patient=>{
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const id: string = uuidv4();
  const newPatientEntry = {
    id, ...entry
  };
  patientsData.push(newPatientEntry);
  return newPatientEntry;
};


export default { getNonSensitiveEntries, addNewPatients };
