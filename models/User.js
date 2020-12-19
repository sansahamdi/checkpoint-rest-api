const mongoose=require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String
        },
        phone:{
            type:Number
        },
        post:{
            type:String
        },
    }
)

const UserModel=mongoose.model('user',userSchema)
module.exports=UserModel