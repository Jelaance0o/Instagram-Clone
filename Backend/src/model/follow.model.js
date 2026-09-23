const mongoose = require("mongoose")
// Edge collection for store following
const followSchema = new mongoose.Schema({
  follower: {
    type:String
    },
  
  followee: 
    {
    type:String
    },
},
{timestamps: true},
)
;

followSchema.index({follower:1,followee:1},{unique:true})

const followModel = mongoose.model("follows",followSchema)

module.exports = followModel

