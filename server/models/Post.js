const mongoose=require('mongoose');

const PostSchema=mongoose.Schema(
    {
        item:{
            type:String,
            required:true
        },
        amount:{
            type:Number,
            required:true
        }

    }
);

module.exports=mongoose.model('tasks',PostSchema);