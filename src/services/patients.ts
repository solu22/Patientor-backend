import { v4 as uuidv4 } from 'uuid';
import data from "../../data/patients";

import { NewPatientEntry, Patient, PublicPatient } from "../types";

const patientsData: Array<Patient> = data ;

const getNonSensitiveEntries = (): Array<PublicPatient> => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation}) => ({
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

const findById = (id: string): Patient | undefined=>{
  const singlePatient = patientsData.find(sp=> sp.id === id);
  if(singlePatient){
    return singlePatient;
  }
  return singlePatient;
};



export default { getNonSensitiveEntries, addNewPatients, findById };
