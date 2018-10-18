const express = require('express');
const placeRouter = express.Router();

const placeData = require('../model/placeData');


placeRouter.route('/').get((req,res)=>{
    placeData.find().then(
        function(places){
            res.render('p2see',{places})
        }
    )
});

placeRouter.route("/add").get((req,res)=>{
    var item = {
        name:req.param('name'),
        dist:req.param('dist'),
        desc:req.param('desc')
    }
    var pl= new placeData(item);
    pl.save();
    res.redirect('/p2see');
    
});

placeRouter.route("/:id").get((req,res) => {
    const id = req.params.id;
    placeData.findOne({_id:id}).then(function(place){
        res.render('1p',{place})
})
});

module.exports = placeRouter;
