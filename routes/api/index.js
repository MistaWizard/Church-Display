const path = require("path");
const router = require("express").Router();
const songRoutes = require("./song");

router.use("/song", songRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
});

module.exports = router;