const express = require("express");
const cors = require('cors');

const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors());

const {connection} = require("./db")
const {userRouter} = require("./Routes/user.routes")
const {RestaurantRouter} = require("./Routes/restaurant.routes")
const {OrderRouter} = require("./Routes/order.routes")


app.get("/", (req,res) => {
    res.send("Welcome to backend of Food Delivery")
})

app.use("/api", userRouter)
app.use("/api", RestaurantRouter)
app.use("/api", OrderRouter)


app.listen(process.env.port, async ()=>{
    try{
        await connection
        console.log("Connected to DB")
    } catch(err){
        console.log(err.message)
    }
    console.log(`Server is listening at port ${process.env.port}`)
})