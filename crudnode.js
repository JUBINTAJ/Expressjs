const express=require('express')
const app=express()
const port=3000


app.use(express.json())

let  list=[]
let count=0

app.post('/post',(req,res)=>{
    const {name,email,password,add}=req.body
    list.push({id:count,name,email,password,add})
    count++
    res.send("successss")
    res.end()
})

app.get('/get',(req,res)=>{
    res.send(list)
    res.end()
})

app.put('/put/:id',(req,res)=>{
    const {id}=req.params
    const {name,password,email,add}=req.body
    const update=list.map(item=>{
        if(id==item.id){
            return {id,name,email,password,add}
        }else{
            return {...item}
        }
    })
    list=[...update]
    res.send(list)
    res.end()

})
app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params
    list=list.filter((item)=>item.id !== id)
    res.send(list)
    res.end()
  
})  
 
app.listen(port,()=>{
    console.log('kiitttii da ...')
})