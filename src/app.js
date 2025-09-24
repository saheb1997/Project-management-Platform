import express from "express";
import cors from "cors"
const app = express();


//cors configurarion
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",")|| "http://localhost:5173",
    Credential : true,
    methods : ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    alloweHeaders: ["Content_Type","Authorization"],

}));

// basic configaration
app.arguments(express.json({limit: "16kb"}));
app.use(express.urlencoded({extends:true , limit: "16kb"}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("welcome to basecampy");
});
export default app; 