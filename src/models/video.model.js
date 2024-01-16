import mongoose,{Schema} from "mongoose";

const videoSchema=new Schema(
    {
        videoFile:{
            type:String, //clodinary url
            required:true
        },
        thumbnail:{
            type:String, //clodinary url
            required:true
        },
        title:{
            type:String, 
            required:true
        },
        description:{
            type:String, 
            required:true
        },
        videoFile:{
            type:String, //clodinary url
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {
        timestamps:true
    }
)

export const Video=mongoose.model("Video",videoSchema)