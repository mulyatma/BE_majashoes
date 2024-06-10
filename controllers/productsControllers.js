const Product = require('../models/Product')

module.exports = {
    createProduct: async (req, res) => {
        const newProduct = Product(req.body)
        try {
            await newProduct.save();
            res.status(200).json("product created")
        } catch (err) {
            res.status(500).json('failed to create product')
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find().sort({ createdAt: -1 })
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json('failed to get product')
        }
    },

    getProduct: async (req, res) => {
        const productId = req.params.id
        try {
            const product = await Product.findById(productId)
            const { __v, createdAt, ...productData } = product._doc;
            res.status(200).json(productData)
        } catch (err) {
            res.status(500).json('failed to get product')
        }
    },

    searchProducts: async (req, res) => {
        try {
            const result = await Product.aggregate(
                [
                    {
                        $search: {
                            index: "sneakers",
                            text: {
                                query: req.params.key,
                                path: {
                                    wildcard: "*"
                                }
                            }
                        }
                    }
                ])
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json('failed to get product')
            console.log(err)
        }
    },
}