// require mongoose
var mongoose = require('mongoose');
// create the schema
var QuoteSchema = new mongoose.Schema({
    name: {type: String},
    quote: {type: String}
}, {timestamps: true})
// register the schema as a model
var Quote = mongoose.model('Quote', QuoteSchema);
