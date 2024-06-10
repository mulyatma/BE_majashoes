const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    customerId: { type: String, required: true },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantitiy: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    delivery_status: { type: Number, required: true, default: "pending" },
    paymnet_status: { type: Number, required: true },
    total: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema)