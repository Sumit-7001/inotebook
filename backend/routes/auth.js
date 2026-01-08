const express=require('express');
const router=express.Router()
const User = require('../models/Users');
const { query, validationResult } = require('express-validator');


router.get('/',[
    body('name').isLength({min:3}),
    body('mail').isMail(),
    body('password').isLength({min:5})

],(req,res)=>{
    console.log(req.body )
    const user=User(req.body)
    user.save()
    res.json(req.body  )

})

module.exports=router

