import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import "./ProductList.css";
import { Filters } from "./ProductFilter";
import { NavLink } from "react-router-dom";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductList = () => {
  const { showItem } = useContext(CartContext);
  const { addToCart, cart } = useContext(CartListContext);
  const btnClick = (item) => {
    return cart?.find((cartItem) => cartItem.id === item.id)
      ? ""
      : addToCart(item);
  };

  return (
    <div className="product-list">
      <div className="filter-items">
        <Filters />
      </div>
      <div className="product">
        {showItem.map((item) => (
          <div className="product-card">
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

                <button>Add to wishlist</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
