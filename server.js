require('dotenv/config')
const express = require('express');
const app=express();
const PORT=process.env.PORT||8000
const UserRoute=require("./routes/userRoute")
const AdminRoutes=require('./routes/adminRoute')
const instructorRoutes=require('./routes/intructorRoutes')


const sequelize = require('./config/database');
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/user",UserRoute)
app.use('/Admin',AdminRoutes)
app.use('/instructor',instructorRoutes)
app.use('/uploads', express.static('/uploads'));
app.use((err, req, res, next) => {
    if (err.code === 'LIMIT_FILE_SIZE') {
        console.log(err)

      res.status(400).json({ error: 'File size is too large!' });
    } else {
        console.log(err)
      res.status(500).json({ error: err.message });
    }
    next();
  });


app.get("/",(req,res)=>{
    res.send("The runjksdnjfhdjsnfjnsdjfn");
})


app.listen(PORT,(req,res)=>{
    console.log(`The server running On ${PORT}`)
});