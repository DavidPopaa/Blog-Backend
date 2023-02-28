require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require('./routes/user')
const blogRoutes = require('./routes/blog')


app.use(cors()) 
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/user', userRoutes)
app.use('/api/blog', blogRoutes)

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB)
.then(() => {
    app.listen(4000, () => {
        console.log("backend connected...")
    })
})
.catch((error) => {
    console.log(error)
})