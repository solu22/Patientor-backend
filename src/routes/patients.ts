/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientService from "../services/patients";
import { toEntry, toNewPatientEntry } from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.get("/:id", (req, res)=>{
  try {
    const getPatient = patientService.findById(req.params.id);
    if(getPatient){
      res.json(getPatient);
    }
  } catch (error) {
    console.log(error);

    
  }
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

router.post("/:id/entries",(req, res)=>{
  try {
    const data = toEntry(req.body);
    const newObj = patientService.addEntry(data);
    res.json(newObj);

  } catch (error) {
    console.log(error);
  }
});


export default router;
