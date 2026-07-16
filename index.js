import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users.js';
import docRouter from './routes/documents.js';
import contentRouter from './routes/content.js'

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/documents', docRouter); 
app.use('/content', contentRouter);

app.get('/', (req,res) =>{
    console.log("Rendered homepage");
    res.render('home');
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});