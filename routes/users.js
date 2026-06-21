import express from 'express';
import users from '../data/users.js';
import documents from '../data/documents.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(users);
});

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