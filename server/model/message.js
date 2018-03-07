const {mongoose} = require('../db/mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    content : {
        type : String,
        required : true
    },
    user : {
        type : Schema.Types.ObjectId , ref : 'User'
        // type : String
    }
});

var Message = mongoose.model('Message',messageSchema);

module.exports = {Message};