const { UserSchema } = require("../db/models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TokenSchema } = require("../db/models/token-model");

class UserService {
  // LOGIN
  async login(email, password) {
    const user = await UserSchema.findUnique({ where: { email } });
    if (!user) return { msg: "Пользователь не существует." };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { msg: "Некорректный пароль." };

    // Then create jsonwebtoken to authentication
    const tokens = this.generateTokens(user.id);
    return {
      user,
      ...tokens,
    };
  }
  //   REGISTER
  async register(name, email, password) {
    const candidate = await UserSchema.findUnique({ where: { email } });
    if (candidate) return { msg: "Электронная почта уже существует." };

    if (password.length < 6)
      return { msg: "Пароль должен быть не менее 6 символов." };

    // Password Encryption
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await UserSchema.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });
    // Then create jsonwebtoken to authentication
    const tokens = this.generateTokens(newUser.id);
    return {
      newUser,
      ...tokens,
    };
  }
  generateTokens(id) {
    const accessToken = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    const refreshToken = jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  async validateRefreshToken(token) {
    try {
      const validate = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
      if (validate.id) return token;
    } catch (e) {
      return null;
    }
  }
}
module.exports = new UserService();
