const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

const data = {
    items: [],
    receipt: [],
}

class Store {

    static async listItems() {

        const products = storage.get("products").value();
        return products;
    }

    // static async getReceipt(transaction) {

    //     const cart = transaction.cart;
    //     const userInfo = transaction.userInfo;

    //     if (!cart) {
    //         throw new BadRequestError("No cart found to checkout.");
    //     }
    //     if (!userInfo) {
    //         throw new BadRequestError("No user info found to checkout with.");
    //     }

    //     //clears receipt
    //     data.receipt = [];

    //     let userName = userInfo.name;
    //     let userEmail = userInfo.email;
        
    //     const orders = {name: userName, userEmail, cart};

    //     //create data receipt json based on cary and userInfo
    //     storage.get("orders").push(orders).write()
    //     data.receipt.push(orders);

    //     return data.receipt;
    // }

}


module.exports = Store;