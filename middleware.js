const express=require('express')
const app=express()

const port=6000

function midlleware(req,res,next){
    console.log('id set')
    next()

}
app.use(midlleware)

app.get('/login',(req,res )=>{
    res.send('<h1>this is login page</h1>')
})

app.get('/main',(req,res )=>{
    res.send('<h1>this is login page</h1>')
})
app.get('/about',(req,res )=>{
    res.send('<h1>this is login page</h1>')
})



app.listen(port,()=>{
    console.log('helloo middlware')
})