const blogSchema = require('../models/blogModel')

// get all blogs
const getallBlogs = async(req, res) => {
    const all_blogs = await blogSchema.find({}).sort({ created_at: -1 })

    if(all_blogs) {
        // returns all blogs
        res.status(200).json(all_blogs)
    }

    if(!all_blogs) {
        res.status(400).json({ msg: 'someting went wrong' })
    }   
}

// post a blog
const postBlog = async(req, res) => {
    const { title, text,  created_by} = req.body

    if(!title || !text || !created_by) {
        res.status(400).json({ msg: 'all fields of blog must be filled !' })
    }

    const created_blog = await blogSchema.create({ title, text, created_by, created_at: Date.now()})

    if(created_blog) {
        // returns the created blog
        res.status(200).json(created_blog)
    }

    if(!created_blog) {
        res.status(400).json({ msg: 'someting went wrong' })
    }
}

// update a blog
const updateBlog = async(req, res) => {
    const { id } = req.params

    const { title, text } = req.body

    if(!title || !text) {
        res.status(400).json({ msg: 'all fields of blog must be filled !' })
    }

    const updatedBlog = await blogSchema.findByIdAndUpdate({ _id: id }, {
        title,
        text
    })

    if(updatedBlog) {
        // update all blogs plus the updated blog
        const all_blogs_plus_updatedone = await blogSchema.find({})
        res.status(200).json(all_blogs_plus_updatedone)
    }

    if(!updatedBlog) {
        res.status(400).json({ msg: 'someting went wrong' })
    }

}

// delete a blog
const deleteBlog = async(req, res) => {
    const { id } = req.params
    const deleted_blog = await blogSchema.findByIdAndDelete({ _id: id })

    if(deleted_blog) {
        // returns the deleted blog
        res.status(200).json(deleted_blog)
    }

    if(!deleted_blog) {
        res.status(400).json({ msg: 'someting went wrong' })
    }
}

module.exports = {
    postBlog,
    updateBlog,
    getallBlogs,
    deleteBlog
}