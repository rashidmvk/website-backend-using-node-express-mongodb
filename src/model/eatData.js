const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cali');

const Schema = mongoose.Schema;

var newEatSchema = new Schema({
    name: String,
    addr: String,
    desc: String,
    phno: String
});

var eatData = mongoose.model('eatdata',newEatSchema);

module.exports = eatData;