/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Gender, NewPatientEntry } from "./types";
import { BaseEntry as Entry } from "./types";

/* Type guard */
const isString = (text: unknown): text is string=>{
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean=>{
    return Boolean(Date.parse(date));
};

const isGender = (param:any):param is Gender =>{
    return Object.values(Gender).includes(param);
};


/*Parsed input values */
const parseString = (name: unknown): string=>{
    if(!name || !isString(name)){
        throw new Error('Incorrect or missing name');
    }
    return name;
};

const parseDate = (date: unknown): string =>{
    if(!date || !isString(date) || !isDate(date)){
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;

};

const parseGender = (gender: unknown):Gender =>{
    if(!gender || !isString(gender) || !isGender(gender)){
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};



export const toNewPatientEntry = (object: any): NewPatientEntry=>{
    const newEntry: NewPatientEntry = {
        name: parseString(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn),
        gender:parseGender(object.gender),
        occupation: parseString(object.occupation),
        entries: []
    };
    return newEntry;
};

export const toEntry = (object: any): Omit<Entry, 'id'>=>{
    return{
        description: parseString(object.description),
        date: parseDate(object.date),
        specialist: parseString(object.specialist)
    };

};
