/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientService from "../services/patients";
import { toNewPatientEntry } from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedEntry = patientService.addNewPatients(newPatientEntry);
    res.json(addedEntry);
    
    
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong. ';
    if(error instanceof Error){
      errorMessage+= 'Error: ' + error.message;
    }
    res.status(400).send(errorMessage);

  }
});

export default router;
