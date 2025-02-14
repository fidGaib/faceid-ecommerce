const { UserSchema } = require("../db/models/user-model");
const authAdmin = async (req, res, next) => {
  try {
    // Get user information by id
    const user = await UserSchema.findUnique({
      where: { id: req.user.id },
    });
    if (user.role === 0)
      return res
        .status(400)
        .json({ msg: "Администраторский доступ к ресурсам отклонён" });

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authAdmin;
