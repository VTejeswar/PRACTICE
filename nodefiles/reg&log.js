
rt=exp.Router();
    rt.post('/userRegistration',(req,res)=>{
        console.log(req.body);
        conn.tbl_userdata.save(req.body,(err)=>{
            if(err)
            res.send(err)
            else
            res.send({result:"inserted"})
        })
    })   


    rt.post("/checkuser",(req,res)=>{
        console.log(req.body)

        conn.tbl_userdata.find(req.body,(err,result)=>{

        if(result.length==0){
            res.send({login:"fail"})
        }else{
            res.send({login:"success",result})
        }
        }) 
    })
module.exports=rt;       