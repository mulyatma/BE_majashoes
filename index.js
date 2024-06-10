const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const productRoute = require('./routes/products')
const authRoute = require('./routes/auth')
const userRouter = require('./routes/users')
const ordersRouter = require('./routes/orders')
const cartsRouter = require('./routes/cart')
const app = express()

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => console.log("db connected")).catch((err) => console.log(err))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use('/api', authRoute)
app.use('/api/product', productRoute)
app.use('/api/users', userRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/cart', cartsRouter)

app.listen(process.env.PORT, () => console.log(`app running on port ${process.env.PORT}`))