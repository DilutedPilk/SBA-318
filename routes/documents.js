import express from 'express';
import documents from '../data/documents.js';

const router = express.Router();

router.get('/', (req, res) =>{
    res.send(documents);
});

router.get('/:doc_id', (req, res) =>{
    const doc = documents.find((d) => d.doc_id == req.params.doc_id);
    res.json(doc);
});

export default router;