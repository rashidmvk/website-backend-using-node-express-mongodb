const express = require('express');
const eatRouter = express.Router();

const eatData = require('../model/eatData');


eatRouter.route('/').get((req,res)=>{
    eatData.find().then(
        function(eats){
            res.render('p2eat',{eats})
        }
    )
});

eatRouter.route("/add").get((req,res)=>{
    var item = {
        name:req.param('name'),
        addr:req.param('addr'),
        desc:req.param('desc'),
        phno:req.param('phno')
    }
    var eat= new eatData(item);
    eat.save();
    res.redirect('/p2eat');
    
});

eatRouter.route("/:id").get((req,res) => {
    const id = req.params.id;
    eatData.findOne({_id:id}).then(function(eat){
        res.render('1e',{eat})
})
});

module.exports = eatRouter;
