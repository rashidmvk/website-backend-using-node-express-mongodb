const express = require ('express');
const chalk = require ('chalk');
const path = require('path');
const placeData = require('./src/model/placeData');
const eatData = require('./src/model/eatData');
const placeRouter = require('./src/routes/placeRoutes');
const eatRouter = require('./src/routes/eatRoutes');

const app = express();

app.use(express.static(path.join(__dirname,'/public')));
app.set("views","./src/views");
app.set("view engine","ejs");
app.use('/p2see',placeRouter);
app.use('/p2eat',eatRouter);


app.get('/',(req,res)=>{
    var eatss;
    eatData.find().limit(2).then(eats =>{
        eatss = eats;
    })
    placeData.find().limit(2).then(places=>{
        res.render("index",{places,eatss});
    });
});

app.get('/admin',(req,res)=>{
    res.render("admin");
});

app.get('/api/:year/:month',(req,res)=>{
    res.send([req.query,req.params]);
});

app.listen(3000,()=>{
    console.log('listening at '+ chalk.yellow('3000'));
});