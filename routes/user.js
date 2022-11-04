const router = require("express").Router();

router.get("/userTest", (req, res) => {
  res.send("user test is working");
});

// localhost:5000/api/user/userTest

router.post("userPostTest", (req, res) => {
    const userName = req.body.userName;
    console.log(userName);
  res.send("user post test is working");
});

module.exports = router;
