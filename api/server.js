const express = require("express");
const morgan = require("morgan");
const storeRouter = require("./routes/store");
const { NotFoundError } = require("./utils/errors")

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/store", storeRouter);

// Handle all 404 errors that weren't matched by a route
app.use((req, res, next) => {
    return next(new NotFoundError());
});

// Generic error handler - anything that is unhandled will be handled here
app.use((err, req, res, next) => {

    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status }
    });
});


const port = 3001;
app.listen(port, () => {
    console.log(`🚀 Server listening on port ` + port);
});