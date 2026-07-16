//This page is mostly to be able to test the push and pull function and to look at the available users for testing

import express from 'express';
import users from '../data/users.js';
import documents from '../data/documents.js';

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        res.status(200).json(users);
    })
    .post((req,res)=>{
        users.push(req.body)
        res.status(200).json(req.body);
    })

router.get('/:id', (req, res) => {
    const user = users.find((u) => u.d == req.params.id);
    res.json(user);
});

router.get('/:id/documents', (req, res) => {
    const userDocs = [];
    documents.forEach((d) => {
        if (d.user_id == req.params.id) {
            userDocs.push(d);
        }
    });
    res.json(userDocs);
});


export default router;