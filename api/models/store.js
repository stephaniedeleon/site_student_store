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

        //Formats the total
        let formatter = new Intl.NumberFormat("en-US", {
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        
        let formatAmount = (amount) => {
            const dollars = amount;
            return `$${formatter.format(dollars)}`;
        }

        //User Info
        let userName = userInfo.name;
        let userEmail = userInfo.email;

        //For computing total
        const tax = .0725;
        const purchases = { items: [] };
        let totalPrice = 0;
        let price = 0;
        let subtotal = 0;
        let total = 0;

        for (const [key, value] of Object.entries(cart)) {

            const product = storage.get("products").find({ name: key }).value();

            price = product.price
            totalPrice = price * value
            //computes subtotal
            subtotal += (totalPrice);

            //stores total for each item based on quantity
            let item = {item: key, price: formatAmount(price), quantity: value, total: formatAmount(totalPrice)};
            purchases.items.push(item);
        }

        total = formatAmount(subtotal + (subtotal * tax));
        subtotal = formatAmount(subtotal);

        //writing new order to the database json file
        const newOrder = {name: userName, email: userEmail, cart, purchases, subtotal: subtotal, total: total};
        storage.get("orders").push(newOrder).write()

        return newOrder;
    }


    //Fetch product by Id
    static async fetchProductById(productId) {

        // fetch a single product
        const product = storage
          .get("products")
          .find({ id: Number(productId) })
          .value();
        return product;
    }

}


module.exports = Store;