const express=require('express')
const app=express()
app.use(express.json())
const port=5000

let count=0;
let userr=[]

app.get('/about',(req,res)=>{

   res.json(userr)
    res.end()
})

app.post('/',(req,res)=>{
    const {name,email,password}=req.body
    userr.push({id:count,name,email,password})
    count++;
    res.send('sucess ')
})


// app.put('/patch/:id',(req,res)=>{
//     const {id}=req.params
//     const {name,email,password}=req.body

//     const update=userr.map(item=>{
//         if(id==item.id){
//             return {name,email,password}
//         }else{
//             return {...item}
//         }

//     })
//      userr=[...update]
//     res.json(userr)
//     res.end()

// })


app.put('/patch/:id',(req,res)=>{
    const {id}=req.params
    const {email,name,password}=req.body
    const update=userr.map(item=>{
        if(id==item.id){
            return {name,email,password}

        }else{
            return {...item}
        }
    })

userr=[...update]
res.send(userr)
res.end()
 
})
  app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params

    userr=userr.filter((item)=>item.email !==email)
    res.send(userr)
    res.end()  
  })

  

app.listen(port,()=>{
    console.log('ready annu mwone')
}) 