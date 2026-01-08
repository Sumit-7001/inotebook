const express=require('express');
const router=express.Router()


router.get('/',(req,res)=>{
    obj={
        a:'tjis',
        b:'bbbbbbbbbbbbbb'
    }
    res.json(obj)
})




module.exports=router

