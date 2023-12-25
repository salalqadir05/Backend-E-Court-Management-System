const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const applicantRoutes = require('./routes/applicantRoutes');
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",applicantRoutes)



try {
 mongoose.connect(process.env.MONGO_URL)
console.log("Database is connected with Application successfully");
} catch (error) {
console.log(error);    
}

app.listen(process.env.PORT,()=>{
    console.log(`App is running on ${process.env.PORT}`);
})