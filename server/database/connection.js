require('dotenv').config();
const mongoose=require('mongoose');
// Connecting to database
mongoose.connect(process.env.DATABASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser: true
});
const db=mongoose.connection;
db.on('error',(err)=>console.log(err));
db.once('open',()=>console.log('Connected To Database'));
module.exports=db;