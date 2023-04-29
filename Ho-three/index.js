const express=require("express");
const dotenv=require("dotenv").config();
const port=process.env.PORT;

const firstMiddle=(req,res,next)=>{
    console.log("Checking the first middleware for all the routes (firstMiddle)")
    next()
}
const secondMiddle=(req,res,next)=>{
    console.log("Checking the second middleware for specific routes (secondMiddle)")
    next()
}

const app=express();
const data={
    "Express JS": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes."
}
app.use(firstMiddle);

app.get("/",(req, res)=>{
    console.log("This is executed after cheecking middleware(firstMiddle)");
    res.send("This is the home page...")
});
app.get("/api",secondMiddle,(req, res)=>{
    console.log("This is executed after cheecking both the middlewares (firstMiddle & secondMiddle)");
    res.send(data)
});
app.get("/main",secondMiddle,(req,res)=>{
    console.log("This is executed after cheecking both the middlewares (firstMiddle & secondMiddle)");
    res.send("<h1>What Is Express JS?    Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</h1>")
})
app.listen(port,()=>{console.log("server is connected to the port - "+port)})