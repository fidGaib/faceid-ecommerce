const { CategorySchema } = require("../db/models/category-model");
const { ProductSchema } = require("../db/models/product-model");

const categoryCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await CategorySchema.findMany();
      res.json(categories);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCategory: async (req, res) => {
    try {
      // Если у пользователя role = 1 ---> admin
      // Только администратор может создавать, удалять и обновлять категорию
      const { name } = req.body;
      const category = await CategorySchema.findUnique({ where: { name } });
      if (category)
        return res.status(400).json({ msg: "Эта категория уже существует." });
      await CategorySchema.create({ data: { name } });
      res.json({ msg: "Категория создана" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const products = await ProductSchema.findUnique({
        where: { category: req.params.id },
      });
      if (products)
        return res.status(400).json({
          msg: "Пожалуйста, удалите все продукты.",
        });

      await CategorySchema.delete({ where: { id: req.params.id } });
      res.json({ msg: "Категория удалена" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await CategorySchema.update({
        where: { id: req.params.id },
        data: { name },
      });

      res.json({ msg: "Категория обновлена" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = categoryCtrl;
