import "./ProductList.css";
import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext/CartContext";
import { Filters } from "./ProductFilter";
import { FilterReducerContext } from "../../contexts/ReducerContext/ReducerContext";
import { ProductListCard } from "../../components/ProductList/ProductListCard";

export const ProductList = () => {
  const { showItem } = useContext(CartContext);

  const {
    filterState: { byPrice, byRating, search, sort, category },
  } = useContext(FilterReducerContext);

  const transformProduct = () => {
    let filteredProduct = [...showItem];

    if (category.length > 0) {
      filteredProduct = filteredProduct.filter((product) =>
        category.includes(product.category)
      );
    }
    if (sort) {
      filteredProduct = filteredProduct.sort((a, b) =>
        sort === "l2h" ? a.price - b.price : b.price - a.price
      );
    }
    if (byPrice) {
      filteredProduct = filteredProduct.filter(
        (product) => product.price <= Number(byPrice)
      );
    }
    if (byRating) {
      filteredProduct = filteredProduct.filter(
        (product) => Math.floor(product.rating) >= Number(byRating)
      );
    }
    if (search) {
      filteredProduct = filteredProduct.filter(
        (product) =>
          product.description.toLowerCase().includes(search.toLowerCase()) ||
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredProduct;
  };

  return (
    <div className="product-list">
      <div className="filter-items">
        <Filters />
      </div>
      <div className="product">
        {transformProduct()?.length === 0 ? (
          <h1>No Products Found!</h1>
        ) : (
          transformProduct()?.map((item) => <ProductListCard {...item} />)
        )}
      </div>
    </div>
  );
};
