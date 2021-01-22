const express=require("express")
const mongodb=require("mongodb")
const nodemailer = require("nodemailer")
const cors=require("cors")
require("dotenv").config()

const mongoClient=mongodb.MongoClient
const objectId=mongodb.ObjectID

const app=express()

const dbURL = process.env.DB_URL || "mongodb://127.0.0.1:27017"

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get("/getDetails",async (req,res)=>{
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("PortfolioDB")
        let data = await db.collection("MyDetails").find({ _id : objectId("6007e620c40a0726210ba3e7") }).toArray();
        res.status(200).json({data})
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

app.put("/addIntro",async (req,res)=>{
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("PortfolioDB")
        let data = await db.collection('MyDetails').updateOne( { _id : objectId("6007e620c40a0726210ba3e7") } , { $set : { intro : req.body.intro } });
        res.status(200).json({message : "Intro added"})
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})
app.put("/addHobbies",async (req,res)=>{
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("PortfolioDB")
        let data = await db.collection('MyDetails').updateOne( { _id : objectId("6007e620c40a0726210ba3e7") } , { $set : { hobbies : req.body.hobbies } });
        res.status(200).json({message : "Hobbies added"})
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

app.put("/addContactInfo",async (req,res)=>{
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("PortfolioDB")
        let data = await db.collection('MyDetails').updateOne( { _id : objectId("6007e620c40a0726210ba3e7") } , { $set : { contactInfo : req.body.newContactInfo } });
        res.status(200).json({message : "contact added"})
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

app.put("/addQualifications",async (req,res)=>{
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("PortfolioDB")
        let data = await db.collection('MyDetails').updateOne( { _id : objectId("6007e620c40a0726210ba3e7") } , { $set : { educationDetails : req.body.educationDetails } });
        res.status(200).json({message : "Qualifications added"})
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

app.put("/addProject",async (req,res)=>{
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("PortfolioDB")
        let data = await db.collection('MyDetails').updateOne( { _id : objectId("6007e620c40a0726210ba3e7") } , { $push : { projects : req.body } });
        res.status(200).json({message : "Project added"})
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

app.put("/addSkill",async (req,res)=>{
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("PortfolioDB")
        let data = await db.collection('MyDetails').updateOne( { _id : objectId("6007e620c40a0726210ba3e7") } , { $push : { skills : req.body } });
        res.status(200).json({message : "Skill added"})
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

app.listen(port,()=>{
    console.log("App started at port :",port)
})