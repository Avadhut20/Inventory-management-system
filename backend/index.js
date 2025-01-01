const express=require('express');
const productRoutes= require('./controllers/productController');
const app= express();

app.use(express.json());
app.use('/api',productRoutes)

app.listen('3000',()=>{
    console.log("server started")
})