const express = require('express');
const app = express();
const mongoose = require('mongoose') 
const productRoutes = require('./routes/product.routes')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
    res.send('Hello World')
})
 

 
mongoose.connect('mongodb+srv://abhaymishra94814:s5g5EeZQCBTcvjuj@crud-app.dokdj.mongodb.net/?retryWrites=true&w=majority&appName=crud-app')
.then(() => {
    console.log('MongoDB Connected...')
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    })
}).catch(() => {
    console.log('Connection failed...')
})