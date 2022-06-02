import express from "express"


const app=express();

app.get("/",(req,res)=>{
  res.send("connected to express");
  res.end();
})

app.listen(5000,(req,res)=>{
  console.log("listing on port 5000")
})