const express=require('express');
const app=express();
const orderRouter=require('./routes/order');
const userRoutes=require('./routes/users');

app.use("/orders",orderRouter);
app.use("/users",userRoutes);
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});