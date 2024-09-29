import express, { request } from "express";

const PORT = 5000
const app = express()
app.use(express.json())


app.get("/home",(req:any ,res:any)=>{
    return res.json({
        "msg":"hello"
    })
})

//balances
//onRampTransactions

app.listen(PORT,()=>{
    console.log("running on "+ PORT);
})