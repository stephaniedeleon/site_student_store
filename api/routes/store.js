const express = require("express");
const Store = require("../models/store")
const router = express.Router();

const { NotFoundError } = require("../utils/errors");


router.get("/", async (req, res, next) => {

    try {
        let products = await Store.listItems();
        res.status(200).json({ products });

    } catch(err) {
        next(err);
    }
});


router.post("/", async (req, res, next) => {

    try {
        const receipt = await Store.getReceipt(req.body);
        res.status(200).json({ receipt });

    } catch(err) {
        next(err);
    }
});


module.exports = router;