import mongoose,{Schema} from "mongoose";

const userSchema=new Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true // its optimize the search process
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
        },
        avatar:{
            type:String, //cloudnary url
            required:true
        },
        coverImage:{
            type:String, //cloudnary url
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        passWord:{
            type:String,
            required:[true,"password is required"]
        },
        refreshToken:{
            type:String
        }
    },
    {
        timestamps:true
    }
)

export const User=mongoose.model("User",userSchema);