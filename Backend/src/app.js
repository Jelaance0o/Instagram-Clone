require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors")



app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials:true
  }),
);


// Require routes
const authRoter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes")
const userRouter = require("./routes/user.routes")

// using routes
app.use("/api/auth", authRoter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter)

module.exports = app;
