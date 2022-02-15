import diagnosis from '../../data/diagnoses';


import { Diagnosis } from '../types';

const getEntries = (): Array<Diagnosis>=>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return diagnosis;
};

const findByCode = (code: string): Diagnosis | undefined=>{
    return diagnosis.find((d)=> d.code === code);
};



export default { getEntries, findByCode };
