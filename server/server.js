//EXPRESS SERVER

//Bring Express in.
const express = require('express');
const cors = require('cors');
require('dotenv').config();

//Reffrence/selector
require('./models/db');
const User = require('./models/user');
const userRouter = require('./routes/user');

//Initialize Express (app is a variable)
const app = express();

//Use Middilware
app.use(cors());
app.use(express.json());
app.use('/', userRouter);

//Do app.listing
app.listen(process.env.PORT || 5000, () => {
    console.log(`listening on http://localhost:5000`)
});

//Learning Process in codeing: ALWAYS DOCUMENT WITH COMMENTS
//Express is a node library, it makes your codes concise

//Command Line Interface (CLI):
//RESTART NODEMON: npm run dev
//KILL SERVER: ctrl+c
//CLEAR TAMINAL: Clear
