const express=require('express');
const productRoutes= require('./controllers/productController');
const app= express();
const cors=require('cors');

app.use(express.json());
app.use(cors());
app.use('/api',productRoutes)

app.listen('3000',()=>{
    console.log("server started")
})