const User = require('../models/User')

module.exports = {
    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.user.id)

            const { password, __v, updatedAt, createdAt, ...userData } = user._doc

            res.status(200).json(userData)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    delete: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.user.id)
            res.status(200).json("User succesfully deleted")
        } catch (err) {
            res.status(500).json(err)
        }
    }
}