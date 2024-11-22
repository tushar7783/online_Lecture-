require('dotenv/config')
const express = require('express');
const app=express();
const PORT=process.env.PORT||8000
const UserRoute=require("./routes/userRoute")
const AdminRoutes=require('./routes/adminRoute')

const sequelize = require('./config/database');
app.use(express.json())

app.use("/user",UserRoute)
app.use('/Admin',AdminRoutes)

app.get("/",(req,res)=>{
    res.send("The runjksdnjfhdjsnfjnsdjfn");
})


app.listen(PORT,(req,res)=>{
    console.log(`The server running On ${PORT}`)
});