const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  
    
        user:{type: String,required: true},
        textArray:[
            {
                text:{type: String,required: true},
                //time : { type : Date, default: Date.now },
                direction:{ type: String,required: true }//sent or received
                
            }]
    

});

module.exports = mongoose.model('Messages', MessageSchema);