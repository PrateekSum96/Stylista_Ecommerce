import { useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../contexts/CartContext/CartContext";
import "./ProductDetail.css";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import { NavLink } from "react-router-dom";

export const ProductDetail = () => {
  const { cart, btnClick } = useContext(CartListContext);
  const { showWishList, btnClickWishList } = useContext(WishListContext);
  const { showItem } = useContext(CartContext);
  const { productId } = useParams();

  const productToShow = showItem?.find((item) => item.id === productId);
  const discountPercentage = Math.round(
    ((productToShow?.original_price - productToShow?.price) /
      productToShow?.original_price) *
      100
  );

  return (
    <div className="product-detail">
      <div className="product-detail-card">
        <div className="product-detail-img">
          <img
            src={productToShow?.image_url}
            alt={productToShow?.description}
          />
        </div>

        <div className="product-detail-info">
          <div className="title-detail">{productToShow?.title}</div>
          <div className="reviews">
            <span className="span-bold">Reviews:</span>
            {productToShow?.reviews}
          </div>
          <div className="price-detail">
            <div className="current-price">
              <span className="span-bold">Price: </span>&#8377;
              {productToShow?.price}
            </div>
            <div id="price-to-cross">
              &#8377;{productToShow?.original_price}
            </div>
            <div id="price-percentage">{discountPercentage}% off</div>
          </div>

          <div className="product-detail-description">
            <div>
              <span className="span-bold"> Availability: </span>
              {productToShow?.in_stock ? "In Stock" : "Out of Stock"}
            </div>
            <div>
              <span className="span-bold">Description: </span>
              {productToShow?.details}
            </div>
            <div>
              <span className="span-bold">Size: </span>
              {productToShow?.size}
            </div>
            <div>
              <span className="span-bold">Delivery: </span>
              {productToShow?.delivery_time} days
            </div>
          </div>
          {productToShow?.in_stock ? (
            <div className="btn-detail">
              <button onClick={() => btnClick(productToShow)}>
                {cart?.find((cartItem) => cartItem.id === productToShow?.id) ? (
                  <NavLink to="/cart" className="nav-link">
                    Go to Cart
                  </NavLink>
                ) : (
                  "Add to cart"
                )}
              </button>
              <button onClick={() => btnClickWishList(productToShow)}>
                {showWishList?.find(
                  (wishListItem) => wishListItem.id === productToShow?.id
                ) ? (
                  <NavLink to="/wishList" className="nav-link">
                    Go to Wishlist
                  </NavLink>
                ) : (
                  "Add to WishList"
                )}
              </button>
            </div>
          ) : (
            <div className="out-of-stock">OUT OF STOCK</div>
          )}
        </div>
      </div>
    </div>
  );
};
