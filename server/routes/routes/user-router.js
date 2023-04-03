const Router = require("express");
const router = new Router();

const UserController = require("../../controllers/user-controller");
const auth = require("../../middleware/auth");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);
router.get("/refresh_token", UserController.refresh);
router.get("/infor", auth, UserController.getUser);
// router.get("/history", auth, UserController.history);
// router.patch("/addcart", auth, UserController.addCart);
module.exports = router;
