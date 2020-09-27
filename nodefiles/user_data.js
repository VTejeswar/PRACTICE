rt=exp.Router();
    rt.post('/userInsr',(req,res)=>{
        var localData=JSON.parse(req.body.cart)
            var arr=[]
            for(var i=0;i<localData.length;i++){
                arr.push((oid(localData[i]._id)))
                
            }
            console.log(localData)
            body_data={
                mail:req.body.mail,
                password:req.body.password,
                localStorageID:arr
            }
        conn.userData_Products.save(body_data,(err)=>{
            console.log(body_data)
            if(err)
            res.send(err);
            else
            res.send({result:'User Data Inserted'});
        })
    })




    
module.exports=rt;

// rt=exp.Router()
// rt.post("/userInsr",(req,res)=>{
//   var data = JSON.parse(req.body.cartDetails);
//   var uid =oid(req.body.userid);
//   var productid = [];
//   var pqty = [];
//  for(var i=0;i<data.length;i++){
//      productid.push((oid(data[i]._id)))
//     pqty.push(data[i].uqty)
//      //console.log(i);
//  }
//   //console.log(productid);
//   body_data={
//       "userid":uid,
//       "productid":productid,
//       "quantity":pqty
//   }
//   //console.log(body_data)
//   conn.tbl_user_product.save(body_data,(err,result)=>{
//       if(err){
//           res.send(err);
//       }
//       else{
//         res.send({result:"Data Inserted"});
//       }
//   })
// })
// module.exports=rt;
