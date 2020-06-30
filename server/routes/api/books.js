const express=require('express');
const router=express.Router();
const db=require('../../database/connection');
const bookModel=require('../../models/book');
const { reset } = require('nodemon');
// Get all books 
router.get('/',(req,res)=>{
    bookModel.all().then(data=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    });
});
// Get a specific book
router.get('/:id',(req,res)=>{
    bookModel.get(req.params.id).then(data=>{
        res.send(JSON.stringify(data));
    }).catch(err=>{
        res.send(err);
    })
});
// Add a new book
router.post('/',(req,res)=>{
    let title=req.body.title,price=req.body.price;
    bookModel.create(title,price).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.send(err)
    });
});
// Update a book
router.put('/:id',(req,res)=>{

});
// Delete a book
router.delete('/:id',(req,res)=>{

});


module.exports=router;