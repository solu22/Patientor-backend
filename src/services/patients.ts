import patients from "../../data/patients.json";

import { NonSensitiveEntry } from "../types";

const getNonSensitiveEntries = (): Array<NonSensitiveEntry> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

export default { getNonSensitiveEntries };
