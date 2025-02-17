// const express=require('express')
// const app=express()

// const port=4000

// app.get('/',(req,res)=>{
//     res.send('<h1>hellooo kooi</h1>')
// })


// app.get('/about',(req,res)=>{
//     res.send('<h1>hellooo about  kooi</h1>')
// })

// app.get('/main',(req,res)=>{
//     res.send('<p> lorem ireyhufjkfgbruiejn uhurhigkih3 ee </p>')
// })


// app.listen(port,()=>{
//     console.log('server is running express set ayyii')
// // })



// const express=require("express")

// const app=express()

// const port=8000



// app.get('/home',(req,res)=>{
//     res.json({ jii: 'njnhj' })
//     console.log('this is main page')
// })


// app.listen(port,()=>{
//     console.log('worked')
// })


const express=require('express')
const app=express()
const port =2000

app.get('/',(req,res)=>{
    res.send('<h1>koiikikik</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<p>poooo</p>')
})


app.listen(port,()=>{
    console.log('hehehehhe')
})