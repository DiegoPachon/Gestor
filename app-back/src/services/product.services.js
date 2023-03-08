const Product = require("../models/Product.model");
const cloudinary = require("../config/cloudinary");
const { ValidationError } = require("sequelize");

const createProduct = async (name, price, image, category, description) => {
  const cloudinary_image = await cloudinary.uploader.upload(image.path, {
    folder: "/menu",
  });
  return Product.create({
    name,
    price,
    description,
    category,
    cloudinary_id: cloudinary_image.public_id,
  })
    .then((product) => {
      return {
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
      };
    })
    .catch((err) => {
      if (err instanceof ValidationError) {
        throw Error(err.message);
      }
      throw Error(err.original.message);
    });
};

const getProduct = (name) => {
  return Product.findOne({
    where: {
      name,
    },
  });
};

const deleteProduct = (id) => {
  // TODO: Delete image in cloudinary
  return Product.destroy({
    where: {
      id,
    },
  });
};

const getProducts = (offset, limit) => {
  return Product.findAll({
    order: [["createdAt", "DESC"]],
    offset,
    limit,
    attributes: [
      "id",
      "name",
      "price",
      "cloudinary_id",
      "description",
      "category",
    ],
  });
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
};
