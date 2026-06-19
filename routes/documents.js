import express from 'express';
import documents from '../data/documents.js'

const router = express.Router();

router.get('/', (req, res) =>{
    res.send(documents);
});

export default router;