const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

// const data = {
//     items: [],
//     receipt: [],
// }

class Store {

    static async listItems() {

        //reading from a json file
        const products = storage.get("products").value();
        return products;
    }

    static async getReceipt(transaction) {

        const cart = transaction.cart;
        const userInfo = transaction.userInfo;

        if (!cart) {
            throw new BadRequestError("No cart found to checkout.");
        }
        if (!userInfo) {
            throw new BadRequestError("No user info found to checkout with.");
        }

        //not using yet... (reference later)
        //data.receipt = [];
        //data.receipt.push(orders);

        let userName = userInfo.name;
        let userEmail = userInfo.email;

        //TODO: Need to get price for items, and multiply by quantity
        //TODO: Need to add total
        //let products = storage.get("products"); //.find refer to bank.js models = fetchTransactionById
        //let item = storage.get("products").find({ name: Number(transactionId) })

        const newOrder = {name: userName, email: userEmail, cart};

        //writing to a json file
        storage.get("orders").push(newOrder).write()

        return newOrder;
    }

}


module.exports = Store;