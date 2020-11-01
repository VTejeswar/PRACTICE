

    expp=require("express");
    app=expp()  
    corss=require("cors");
    app.use(corss());
    bg=require("body-parser");
    app.use(bg.json());
    mj=require("mongojs");
    connn=mj("mongodb://localhost:27017/CrudeApp");
    let chec=(req,res,next)=>{
        all=req.headers
        if(all.token=='Tejeswar'){
            next()  
        }else{
            res.send({"auth":"fail"});
        }
    }
    app.post("/formdata",[chec],(req,res)=>{
        console.log(req.body)
        connn.UserDetails.save(req.body,(err)=>{
            if(err)
            res.send(err)
            else
            res.send({result:'inserted'})
        })
    });   

    app.get("/get",(req,res)=>{
        connn.UserDetails.find((err,result)=>{
            if (err)
            res.send(err)
            else
            res.send(result)
        })
    }) 
    app.listen(1000)
    console.log('server started')

