const express=require("express");
require('dotenv').config()
const mongoose = require('mongoose');
const authUser = require('./routes/authUser')
const authAdmin = require('./routes/authAdmin')
// const authProduct = require('./routes/authProduct')
const Razorpay=require('razorpay')
const port = process.env.PORT || 3001;
const app = express();
const cors = require('cors')
const crypto=require('crypto')


app.use(cors());
app.use(express.json())
app.use('/auth',authUser)
app.use('/auth',authAdmin)
// app.use('/auth',authProduct)

app.use(express.urlencoded({extended:false}));

app.post("/order",async (req,res)=>{
try{
    const razorpay =new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
    });

    const options =req.body;
    // const options =  {amount: 50000,  // amount in the smallest currency unit
    // currency: "INR",
    // receipt: "order_rcptid_11"}
 
    razorpay.orders.create(options,function(err,orde){
        console.log("line 41")
        console.log(orde)
        if(!orde){
            return res.status(500).send("Error")
        }
        else{
            res.json(orde);
        }
        
    });
    
    
    
}
catch(err){
    console.log(err);
    res.status(500).send("Error");
    
}

})


app.post("/order/validate", async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
  
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    //order_id + "|" + razorpay_payment_id
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");
    if (digest !== razorpay_signature) {
      return res.status(400).json({ msg: "Transaction is not legit!" });
    }
  
    res.json({
      msg: "success",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  });

mongoose.connect("mongodb://localhost:27017/spot",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("DataBase connected")
}).catch((error)=>{
    console.log(error);
})


app.listen(port,()=>{
    console.log("server is running");
})