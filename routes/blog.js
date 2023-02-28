const express = require('express')
const router = express.Router()
const { postBlog, updateBlog, getallBlogs, deleteBlog } = require('../contollers/blogController')

// get all blogs
router.get('/getall', getallBlogs)

// post a blog
router.post('/post', postBlog)

//update a blog
router.patch('/update/:id', updateBlog)

// delete a blog
router.delete('/delete/:id', deleteBlog)

module.exports = router
