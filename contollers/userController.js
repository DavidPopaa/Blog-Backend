const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id: _id }, process.env.SECRET_FOR_JWT, { expiresIn: '9999d' })
}

// login user
const loginUser = async (req, res) => {

    try {
        const { username, password } = req.body
        
        const user = await User.login(username, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ username, token })
        
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

// signup user
const signupUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.signup(username, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ username, token })

    } catch(error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = { signupUser, loginUser }