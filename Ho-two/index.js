const express=require("express");
const dotenv=require("dotenv").config();
const port=process.env.PORT;

const app=express();
const data={
    "Express JS": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes."
}

app.get("/",(req, res)=>{
    res.send("Data will appear here...")
});
app.get("/api",(req, res)=>{
    res.send(data)
});
app.get("/main",(req,res)=>{
    res.send("<h1>What Is Express JS?    Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</h1>")
})
app.listen(port,()=>{console.log("server is connected to the port - "+port)})