import express from 'express';

const app = express();



app.use("/users",(req,res)=>{
    res.send({"name":"John Doe", "age": 30})
 })


 

app.use("/",(req,res)=>{
   res.send("Hello World!")
})



app.listen(3000, () => {        
  console.log('Server is running on port 3000');
});