const Router = require("express");
const categoryRouter = require("./routes/categoryRouter");
const productRouter = require("./routes/productRouter");
const upload = require("./routes/upload");
const userRouter = require("./routes/user-router");
const router = new Router();

router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/products", productRouter);
router.use("/upload", upload);

module.exports = router;
