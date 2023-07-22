import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import "./ProductList.css";
import { Filters } from "./ProductFilter";
import { NavLink } from "react-router-dom";
import { CartListContext } from "../../contexts/CartContext/CartListContext";

import { WishListContext } from "../../contexts/CartContext/WishListContext";
import { FilterReducerContext } from "../../contexts/ReducerContext/ReducerContext";

export const ProductList = () => {
  const { showItem } = useContext(CartContext);
  const { cart, btnClick } = useContext(CartListContext);
  const { showWishList, btnClickWishList } = useContext(WishListContext);

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
        (product) => Math.floor(product.rating) === Number(byRating)
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
          transformProduct()?.map((item) => (
            <div className="product-card" key={item.id}>
              <NavLink to={`/productDetail/${item.id}`}>
                <img src={item.image_url} alt={item.title} />
              </NavLink>

              {item.trending && <div className="trending">Trending</div>}
              <div className="rating-review-size">
                <div className="rating">
                  <span>
                    <i class="fa-solid fa-star fa-2xs"></i>
                    {item.rating}
                  </span>
                  ||
                  <span>{item.reviews}</span>
                </div>
                <div className="size">{item.size}</div>
              </div>
              <div className="title">
                <NavLink to={`/productDetail/${item.id}`}>{item.title}</NavLink>
              </div>
              <div className="description">{item.description}</div>
              <div className="price">
                <span>&#8377;{item.price}</span>
                <span className="original-price">
                  &#8377;{item.original_price}
                </span>
              </div>
              {!item.in_stock ? (
                <button id="btn-out-of-stock" disabled>
                  Out of Stock
                </button>
              ) : (
                <div className="btn">
                  <button onClick={() => btnClick(item)}>
                    {cart?.find((cartItem) => cartItem.id === item.id) ? (
                      <NavLink to="/cart" className="nav-link">
                        Go to Cart
                      </NavLink>
                    ) : (
                      "Add to cart"
                    )}
                  </button>
                  <button onClick={() => btnClickWishList(item)}>
                    {showWishList?.find(
                      (wishListItem) => wishListItem.id === item.id
                    ) ? (
                      <NavLink to="/wishList" className="nav-link">
                        Go to Wishlist
                      </NavLink>
                    ) : (
                      "Add to WishList"
                    )}
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
