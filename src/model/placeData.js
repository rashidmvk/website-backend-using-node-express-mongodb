const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cali');

const Schema = mongoose.Schema;

var newPlaceSchema = new Schema({
    name: String,
    dist: Number,
    desc: String
});

var placeData = mongoose.model('placedata',newPlaceSchema);

module.exports = placeData;