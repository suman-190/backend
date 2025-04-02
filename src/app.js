import express from 'express';

const app = express();

app.use(express.json())

app.use("/users",(req,res)=>{
    res.send({"name":"John Doe", "age": 30})
 })


 

app.use("/",(req,res)=>{
   res.send("Hello World!")
})





 // Middleware to parse JSON bodies

//create a database
// 


const data = [{
   id:1,
   name:"Sumjit",
   age:23,
}]


app.get("/get-user/:id",(req,res)=>{
   console.log(req.params.id)
    res.status(200).send(data)
 })


app.post("/create-user",(req,res)=>{
   console.log(req.body) 
    res.status(200).send({status:"success",
      message:"User created successfully",
    })
 })

 















app.listen(3000, () => {        
  console.log('Server is running on port 3000');
});