exp=require("express");
cors=require("cors")
bodyparserr=require("body-parser");
db=require("mongojs")
app=exp();
app.use(cors());
app.use(bodyparserr.json());
app.listen(8080);
console.log("Server Started");

    conn=db("mongodb://localhost:27017/CrudeApp");

    // app.post("/posting",(req,res)=>{
    //     console.log(req.body)
    //     conn.UserDetails.save(req.body,(err,result)=>{
    //         if(err)
    //         res.send(err);
    //         else
    //         res.send({result:"inserted"});
    //     })
    // })

    app.post("/posting",(req,res)=>{
        console.log(req.body)
        conn.UserDetails.save(req.body,(err)=>{
            if(err)
            res.send(err)
            else
            res.send({result:'inserted'})
        })
    });   