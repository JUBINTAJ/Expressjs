// const express=require('express')
// const app=express()


// const middlware=(req,res,next)=>{
//     if(req.query.tokens==='secury123'){
//         next()
//     }else{
//         res.status(403).send('unauther')
//     }
// }

// app.get('/secure',middlware,(req,res)=>{
//     res.json({message:'welcome'})
// })

// app.listen(4000,()=>{
//     console.log('kittii')
// })


const express=require('express')
const app=express()

port=5000


const meddleware=(req,res,next)=>{
    if(req.query.password==='12345'){
        next()
    }else{
        res.send('password note crrt')
    }
}


app.get('/home',meddleware,(req,res)=>{
    res.json({message:'common man'})
})

app.listen(port,()=>{
    console.log('kittiillee ini povan nookk')
})