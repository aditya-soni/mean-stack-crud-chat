const express = require('express');
var router = express.Router();
const {mongoose}=require('mongoose');
var {Message} = require('../model/message');


router.get('/',(req,res)=>{
    res.send('Api is up')
});

// messages
// #create
router.post('/message',(req,res)=>{
    var content = req.body.content;
    var newMsg = new Message({content});
    newMsg.save().then(
        (msg)=>{
            res.status(201).json({
                message : 'Saved Message!',
                obj : msg
            })
        },
        err=> res.status(500).json({
            title : 'An error has occured',
            error : err
        })
    )
});

// #read
router.get('/messages',(req,res)=>{
    Message.find().then(
        (messages)=>{
            res.status(200).json({
                message : 'Success',
                obj : messages
            })
        },
        (err)=>{
            res.status(400).send(err);
        }
    )
});

// #update
router.patch('/message/:id',(req,res)=>{
    Message.findByIdAndUpdate(req.params.id, {$set : { content : req.body.content }},{new: true}, (err,result)=>{
        if(err){
            return res.status(400).json({
                message : 'An error has occured',
                error : err
            })
        }
        res.status(200).json({
            message : 'Updated Succesfully',
            obj : result
        })
    })
})

// #delete
router.delete('/message/:id',(req,res)=>{
    Message.findByIdAndRemove(req.params.id).then(
        (message)=>{
            if(!message){
                return res.status(404).json({
                    message : 'No message found'
                })
            }
            res.status(200).json({
                message : 'Deleted Succesfully',
                obj : message
            })
        },
        (err)=>{
            res.json({
                message : 'an error occured',
                error : err
            })
        }
    )
})


module.exports = router;