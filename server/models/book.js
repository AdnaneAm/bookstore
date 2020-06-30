const  mongoose  = require("mongoose");
// Model Schema
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    creationDate:{
        type:Date,
        required:true,
        default:Date.now
    }
})

// Compiling Model
let Book=mongoose.model('Book',bookSchema);

// Create a new book
exports.create=function(title,price){
    let book=new Book({
        title,
        price,
        creationDate:new Date()
    })
    return book.save();
}

// Get all books 
exports.all=function(){
    return Book.find({});
}

// Get a specific book
exports.get=function(id){
    return Book.find({_id:id});
}

// Get a specific book
