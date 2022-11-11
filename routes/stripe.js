const { verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();
const axios = require("axios");

router.post("/payment", (req, res) => {
  console.log(req.body);
  axios
    .post(
      "https://api.stripe.com/v1/charges",
      // "https://api.stripe.com/v1/payment_intents",
      // "receipt_email=ngotuehai97@gmail.com",
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: process.env.STRIPE_SECRET_KEY,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
