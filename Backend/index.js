const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { handleDatabase } = require("./database/database.js");
const authRouter = require("./routes/authRoute");
const garbageRouter = require("./routes/garbageRoute");
const driverRouter = require("./routes/driverRoute");
const areaRouter = require("./routes/areaRoute");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const idempotencyMiddleware = require("./middleware/idempotencyMiddleware");
const { connectQueue } = require("./helper/mqService");
const { initializeWorkers } = require("./workers/mqWorkers");
// const serverless = require("serverless-http");

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: "Too many requests from this IP, please try again after 15 minutes",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(express.json());
app.use(cors({
    origin:"*"
}));

// Apply the rate limiting middleware to all requests
app.use(limiter);

// Apply idempotency check globally (only affects requests with x-idempotency-key header)
app.use(idempotencyMiddleware);

app.use("/api/auth", authRouter);
app.use("/api/garbage", garbageRouter);
app.use("/api/driver", driverRouter);
app.use("/api/area", areaRouter);


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Garbage Management Sys"
    })
})

const PORT = process.env.PORT || 8000

handleDatabase()
  .then(() => {
    console.log("Database connected");

    // Connect Message Queue (RabbitMQ)
    connectQueue().then(() => {
        // Initialize background tasks listening to those queues
        initializeWorkers();
    });

    app.listen(PORT, () => {
      console.log("Server is running at port", PORT);
    });
  })
  .catch((err) => console.error("DB connection failed", err));