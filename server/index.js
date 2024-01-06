const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const AccountModel = require("./dbmodel")


const app = express()
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb://127.0.0.1:27017/MovieMasters")

app.post("/register", (req, res) =>{
    AccountModel.create(req.body)
    .then(Accounts => res.json(Accounts))
    .catch(err => res.json(err))
})

app.post("/login", (req, res)=>{
    const{email, password} = req.body
    AccountModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password == password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record existed")
            
        }
    })
})



app.listen(3001, ()=>{
    console.log("Listening at port 3001")
})