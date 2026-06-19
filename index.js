import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users.js'
import docRouter from './routes/documents.js'

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/users/documents', docRouter);

app.get('/', (req,res) =>{
    console.log("Rendered homepage");
    res.render('home');
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
