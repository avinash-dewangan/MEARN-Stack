
const mongoose = require('mongoose'); 
const fileSchema=new mongoose.Schema({ 
 
    profileImg: { 
        type: String 
    }, 
    total:{ 
        type:String, 
        trim:true, 
        required:true 
    }, 
}); 
module.exports= FileUpload = mongoose.model("fileuplod",fileSchema);




