const prisma = require("../index");

const UserSchema = prisma.prisma.userSchema;
module.exports = { UserSchema };
