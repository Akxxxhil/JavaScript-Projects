import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";

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

userSchema.pre("save", async function(next){
   if(!this.isModified("password")) return next()
this.passWord=bcrypt.hash(this.passWord,10)
next()
})
export const User=mongoose.model("User",userSchema);