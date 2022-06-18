import express from "express";
const Connection = require("./storage/db");
const cartRoute = require("./routes/cart.route");
const bestProductRoute = require("./routes/bestProduct.route");
const LoginRouter = require("./routes/Login");
const cors = require("cors");

let app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const port = process.env.PORT || 8060;

app.use("/cart", cartRoute);
app.use("/auth", LoginRouter);
app.use("/best", bestProductRoute);

app.get("/",(req,res)=>{
  res.send("Bestbuy working....")
})

app.listen(port, async () => {
  try {
    await Connection;
    console.log("Connected Successfully");
  } catch (err) {
    console.log(err);
  }

  console.log("Sever is live at http://localhost:8080");
});
