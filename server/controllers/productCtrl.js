const { productImage } = require("../db/models/product-image-model");
const { ProductSchema } = require("../db/models/product-model");

// Filter, sorting and paginating

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString }; //queryString = req.query

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    this.query.find(JSON.parse(queryStr));

    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const {
        limit,
        category,
        sort,
        title: { regex },
      } = req.query;
      //   const features = new APIfeatures(Product.find(), req.query)
      //     .filtering()
      //     .sorting()
      //     .paginating();
      const products = await ProductSchema.findMany({
        skip: 0,
        take: 10,
        include: { images: true },
        // where: {
        //   category,
        //   title: regex,
        // },
        // orderBy: "id desc",
      });
      res.json({
        status: "success",
        result: products.length,
        products: products,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        description,
        content,
        images,
        category,
      } = req.body;
      if (!images)
        return res.status(400).json({ msg: "Нет загрузки изображения" });
      const product = await ProductSchema.findFirst({
        where: { product_id: parseInt(product_id) },
      });
      if (product)
        return res.status(400).json({ msg: "Этот продукт уже существует." });
      const newProduct = await ProductSchema.create({
        data: {
          product_id: parseInt(product_id),
          title: title.toLowerCase(),
          price: parseInt(price),
          description,
          content,
          category,
        },
      });
      await productImage.create({
        data: {
          prodId: newProduct.id,
          ...images,
        },
      });
      res.json({ msg: "Товар создан" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await ProductSchema.delete({ where: { id: parseInt(req.params.id) } });
      res.json({ msg: "Товар удален" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { title, price, description, content, images, category } = req.body;
      if (!images)
        return res.status(400).json({ msg: "Нет загрузки изображения" });

      const newProduct = await ProductSchema.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: {
          title: title.toLowerCase(),
          price,
          description,
          content,
          category,
        },
        include: { images: true },
      });
      await productImage.update({
        where: {
          id: newProduct.images[0].id,
        },
        data: {
          ...images[0],
        },
      });
      res.json({ msg: "Товар обновлен" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = productCtrl;
