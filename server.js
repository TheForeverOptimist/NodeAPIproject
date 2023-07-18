const express = require("express");
const mongoose = require('mongoose');
const Product = require ('./models/productModel')
const app = express();
const port = 3000;

//middleware
app.use(express.json())

//routes

app.get("/", (req, res) => {
  res.send("Hello NODE API!");
});

app.get("/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get("/products/:id", async(req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post("/products", async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})

    }
})

mongoose.set("strictQuery", false)
mongoose.connect(
  "mongodb+srv://admin:$$Laugh4$$@cluster0.p2z6py6.mongodb.net/Node-API?retryWrites=true&w=majority"
).then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
  console.log(`Node API app listening on port ${port}`);
});
}).catch(() => {
    console.log(error)
});
