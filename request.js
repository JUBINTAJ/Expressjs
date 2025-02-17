const express=require('express')
const app=express()

app.use(express.json())

const port=7000


app.get('/user/:id',(req,res)=>{
    console.log(req.params.id)
    console.log(req.query.name)
    console.log(req.query.place)
    console.log(req.query.addres)
    res.send(`id${req.params.id}  ,  name:${req.query.name}  ,place ${req.query.place} , address${req.query.addres}`)
})

app.post('/data',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(port,()=>{
    console.log('is worked')
})