const express = require("express");
const Store = require("../models/store")
const router = express.Router();

const { NotFoundError } = require("../utils/errors");

// fetch all products
router.get("/", async (req, res, next) => {

    try {
        const products = await Store.listItems();
        console.log({ products });
        res.status(200).json({ products });

    } catch(err) {
        next(err);
    }
});


// post user order/cart
router.post("/", async (req, res, next) => {

    try {
        const receipt = await Store.getReceipt(req.body);
        res.status(200).json({ receipt });

    } catch(err) {
        next(err);
    }
});


// fetch single product
router.get("/:productId", async (req, res, next) => {

    try {

        const productId = req.params.productId
        const product = await Store.fetchProductById(productId);
        if (!product) {
            throw new NotFoundError("Transaction not found")
        }
        res.status(200).json({ product });

    } catch (err) {
        next(err)
    }

  })


module.exports = router;