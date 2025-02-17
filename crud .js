// const express=require('express')
// const app=express()

// app.use(express.json())

// let users=[]
// const findUser = (id) => users.find(u => u.id === parseInt(id));


// app.post('/users',(req,res)=>{
//     const {name,username,email}=req.body
//     const newuser={id:users.length+1,name,email,username}
//     users.push(newuser)
//     // res.status(201).send.json({message:'userr kayyrrii', user:newuser })
//     console.log(users)
//     res.send(req.body)


// })

// app.get('/users',(req,res)=>{
//     res.json(users)
// })

// app.get('/users',(req,res)=>{

// })

// app.listen(6000,()=>{
//     console.log('wokkk annoo mwonneee')
// })



const express = require("express");
const app = express();

app.use(express.json());

let users = [];

const findUser = (id) => users.find(u => u.id === parseInt(id));

app.route("/users")
    .post((req, res) => {
        const { name, email, username } = req.body;
        const newUser = { id: users.length + 1, name, email, username };
        users.push(newUser);
        // res.status(201).json({ message: "User created", user: newUser });
        console.log(users)
            res.send(req.body)
    })
  .get((req,res)=>res.json(users))


  app.route("users/:id")
      .get((req,res)=>{
        const user=findUser(req.params.id)
         user?res.json(user)  :res.status(404).json({ message: "User not found" });
      })

    



app.listen(6000,()=>{
    console.log('wokkk annoo mwonneee')
})
