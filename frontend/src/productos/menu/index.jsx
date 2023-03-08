import React, { useState, useEffect } from "react";

import Categories from "./Categories";
import Products from "./Products";

import { getProducts } from "../requests";

const allCategories = ["Todo", "Hamburguesas", "Chorizos", "Bebidas"];

const MenuGeneral = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState(allCategories);
  const [categorySelected, setCategorySelected] = useState(allCategories[0]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setMenuItems(products);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <section className="menu section">
        <Categories categories={categories} filterItems={setCategorySelected} />
        <Products items={menuItems} category={categorySelected} />
      </section>
    </>
  );
};

export default MenuGeneral;
