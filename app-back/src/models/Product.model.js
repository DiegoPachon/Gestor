const { DataTypes } = require("sequelize");
const { connection } = require("../config/db");

const Product = connection.define(
  "Product",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    cloudinary_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(["Hamburguesas", "Chorizos", "Bebidas"]),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: connection.fn("NOW"),
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: connection.fn("NOW"),
      field: "updated_at",
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Product;
