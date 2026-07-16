//functions the same as the users file, which is only for testing purposes

import express from 'express';
import documents from '../data/documents.js';
import loggedInUser from '../data/loggedInUser.js';

async function getLoggedUsers() {
    const response = await fetch(`http://localhost:3000/content/`)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error.message);
    }
}

const router = express.Router();

router
    .route('/')
    .get((req, res) =>{
    res.send(documents);
    })
    .post((req,res)=>{
        res.json(req.body);
    })

router.get('/:user_id', async (req, res) =>{
    const loggedInUser = await getLoggedUsers();
    if (req.params.user_id == loggedInUser.id){
        res.render('content');
    } else {
        throw new Error("You are not logged into this user.")
    }
});

router
    .route('/:user_id/:doc_id')
    .get((req,res)=>{
        if (req.params.user_id == loggedInUser.id){
            const doc = documents.find((d)=>d.user_id == loggedInUser.id && d.doc_id == req.params.doc_id)
            res.status(200).json(doc)
        } else {
            throw new Error("You are not logged into this user.")
        }
    })
    .put((req,res)=>{

    })
    .delete((req,res)=>{
        
    })

router.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Must've been the wind.");
});

export default router;