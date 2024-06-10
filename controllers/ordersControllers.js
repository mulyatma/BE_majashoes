const Orders = require("../models/Order")

module.exports = {
    getUserOrders: async (req, res) => {
        const userId = req.user.id
        try {
            const userOrders = await Orders.find({ userId }).populate({
                path: 'productId',
                select: '-size oldProce -description -category'
            }).exec()

            res.status(200).json(userOrders)
        } catch (err) {
            res.status(500).json({ message: "Failed to get orders" })
        }
    }
}