import express from 'express';
import diagnosesService from '../services/diagnoses';

const router = express.Router();

router.get('/',(_req, res)=>{
    res.send(diagnosesService.getEntries());
});

router.get('/:code', (req, res)=>{
    const data = diagnosesService.findByCode(req.params.code);
    if(data){
        res.json(data);
    }
    res.status(404).end();

});


export default router;
