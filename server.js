const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// banco de dados simples
let usuarios = [
 {id:1, nome:"Miguel", tipo:"aluno", senha:"123"},
 {id:2, nome:"Professor João", tipo:"professor", senha:"123"}
]

// login
app.post("/api/login",(req,res)=>{

 const {nome,senha} = req.body

 const user = usuarios.find(u=>u.nome===nome && u.senha===senha)

 if(user){
  res.json({login:true,usuario:user})
 }else{
  res.json({login:false})
 }

})

// listar usuarios
app.get("/api/usuarios",(req,res)=>{
 res.json(usuarios)
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log("Servidor rodando"))
