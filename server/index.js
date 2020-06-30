const express=require("express");
const bodyParser=require('body-parser');
const cors=require('cors');
const db=require('./database/connection');

const app=express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Books routes
const books=require('./routes/api/books');
app.use('/api/books',books);
// Listening 
const port=process.env.PORT || 4000;
app.listen(port,()=>console.log(`listening to ${port}`));