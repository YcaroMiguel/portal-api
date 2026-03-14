const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (req,res)=>{
 res.send("API funcionando")
})

app.get("/api/teste",(req,res)=>{
 res.json({status:"ok"})
})

app.listen(3000)
