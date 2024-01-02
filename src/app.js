import express from "express"
import cors from "cors" //cross origin resource sharing
import cookieParser from "cookie-parser"
const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true

}))

app.use(express.json({
    limit:"16kb"
}))

app.use(express.urlencoded({  //spacing charcter to %20 (example)
    extended:true , //object inside object
    limit:"16kb"
}))
app.use(express.static("public")) //store pdf,pic,favicon publicaly

app.use(cookieParser())

export default app