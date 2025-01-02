const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require('express');
const bodyparser = require('body-parser');

const router = express.Router();




//get request
router.get("/", async (req, res) => {
    try {
        const data = await prisma.product.findMany();
        res.status(200).send(data);
    }
    catch (error) {
        console.log(error);
        res.status(501).send(error);

    }
})
//post request

router.post("/products", async (req, res) => {
    const {name,description,category,price,stock}= req.body;
    try {
        const product = await prisma.product.create({
            data:{
                name,
                description,
                category,
                price,
                stock
            }

        });
        res.status(200).json({message:"Product created successfully",product});
    }
    catch (error) {
        res.status(501).json({message:error});
    }
})

//update
router.put("/product/:id", async (req, res) => {
    const id = req.params.id;
    const {name,description,category,price,stock}= req.body;
    try {
        const findprodcut= await prisma.product.findUnique({
            where:{
                id:Number(id)
            }
        });
        if(!findprodcut){
            return res.status(404).json({message:"Product not found"});
        }
        const product = await prisma.product.update({
            where:{
                id:Number(id)
            },
            data:{
                name,
                description,
                category,
                price,
                stock
            }

        });
        res.status(200).json({message:"Product Updated successfully",product});
    }
    catch (error) {
        res.status(501).json({message:error});
    }
})

//delete request

router.delete("/product/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const findprodcut= await prisma.product.findUnique({
            where:{
                id:Number(id)
            }
        });
        if(!findprodcut){
            return res.status(404).json({message:"Product not found"});
        }
        const product = await prisma.product.delete({
            where:{
                id:Number(id)
            }

        });
        res.status(200).json({message:"Product deleted successfully",product});
    }
    catch (error) {
        res.status(501).json({message:error});
    }
})


module.exports = router

