import express from 'express';
import loggedInUser from '../data/loggedInUser.js'
import users from '../data/users.js';

const router = express.Router()

const Validate = (req,res,next) =>{
    let val = Number(req.body.id)
    for (let  i = 0; i < users.length; i++) {
        if (users[i].id == req.body.id){
            console.log("User validated")
            next();
        }
    }

    res.sendStatus(403)
}

router
    .route('/')
    .get((req, res) => {
        res.status(200).json(loggedInUser);
    })
    .put(Validate, (req, res) => {
        loggedInUser.id = req.body.id
        loggedInUser.signedIn = req.body.signedIn
        res.json(req.body)
  });

export default router;