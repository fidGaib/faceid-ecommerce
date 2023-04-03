const { UserSchema } = require("../db/models/user-model");
const userService = require("../services/user-service");

class UserController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshtoken", userData.refreshToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        httpOnly: true,
      });
      if (userData.msg) res.status(500).json({ msg: userData.msg });
      return res.status(200).json({ accesstoken: userData.accessToken });
    } catch (e) {
      console.log(e);
    }
  }
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const userData = await userService.register(name, email, password);
      res.cookie("refreshtoken", userData.refreshToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        httpOnly: true,
      });
      if (userData.msg) res.status(500).json({ msg: userData.msg });
      return res.status(200).json({ accesstoken: userData.accessToken });
    } catch (e) {
      console.log(e);
    }
  }
  async logout(req, res) {
    try {
      res.clearCookie("refreshtoken");
      return res.json({ msg: "Вышли" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
  async getUser(req, res) {
    try {
      // Exclude keys from user
      function exclude(usr, keys) {
        for (let key of keys) {
          delete usr[key];
        }
        return usr;
      }
      const user = await UserSchema.findUnique({ where: { id: req.user.id } });
      if (!user) {
        return res.status(400).json({ msg: "Пользователь не существует." });
      }
      return res.status(200).json(exclude(user, ["password"]));
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }

  async history(req, res) {
    try {
      const history = await Payments.find({ user_id: req.user.id });
      return res.json(history);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
  async addCart(req, res) {
    try {
      const user = await UserSchema.findUnique({ where: { id: req.user.id } });
      if (!user)
        return res.status(400).json({ msg: "Пользователь не существует." });
      // await Users.findOneAndUpdate(
      //   { _id: req.user.id },
      //   { cart: req.body.cart }
      // );
      return res.json({ msg: "Товар добавлен в корзину" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
  async refresh(req, res) {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) {
        return res
          .status(400)
          .json({ msg: "Пожалуйста, войдите или зарегистрируйтесь" });
      }
      const data = await userService.validateRefreshToken(rf_token);
      if (!data) {
        return res
          .status(400)
          .json({ msg: "Пожалуйста, войдите или зарегистрируйтесь" });
      }
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
}

module.exports = new UserController();
