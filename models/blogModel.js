const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    created_by: {
        type: String,
        required: true,
    },
    created_at: {
        type : Date, 
        // default: Date.now,
    }
})

module.exports = mongoose.model("Blog", blogSchema)