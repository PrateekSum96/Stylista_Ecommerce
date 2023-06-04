import { useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../contexts/CartContext/CartContext";
import "./ProductDetail.css";

export const ProductDetail = () => {
  const { showItem } = useContext(CartContext);
  const { productId } = useParams();

  const productToShow = showItem?.find((item) => item.id === productId);

  return (
    <div>
      <div className="productDetailCard">
        <img src={productToShow.image_url} alt={productToShow.description} />
        <div>
          <div className="title-detail">{productToShow.title}</div>
          <div className="reviews">{productToShow.reviews} reviews</div>
          <div className="price-detail">
            <div className="price">
              <span>&#8377;{productToShow.price}</span>
              <span id="idToCross">&#8377;{productToShow.original_price}</span>
            </div>
            <div className="pricePercentage">
              {Math.round(
                ((productToShow.original_price - productToShow.price) /
                  productToShow.original_price) *
                  100
              )}
              % off
            </div>
          </div>

          <hr />
          <div className="extra-info">
            <div>
              <b> Availability: </b>
              {productToShow.in_stock ? "In Stock" : "Out of Stock"}
            </div>
            <div>
              <b>Description: </b>
              {productToShow.details}
            </div>
            <div>
              <b>Size: </b>
              {productToShow.size}
            </div>
            <div>
              <b>Delivery: </b>
              {productToShow.delivery_time} days
            </div>
          </div>
          <div className="btn-detail">
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};
/* 
category: "Men"
delivery_time: "5"
description: "Sea Green solid casual shirt"
details: "Sea Green solid casual shirt, has a spread collar, long sleeves, button placket, curved hem, and 1 patch pocket"
id: "1"
image_url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12918948/2021/2/11/a124b071-8455-4cb2-952b-92cb0791296d1613027227490-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-41616130272-1.jpg"
in_stock: true
original_price: "1199"
price: "659"
rating: "4.2"
reviews: "4k"
size: "M"
title: "Roadster"
trending: true
_id: "6156132a-08f4-4e63-a941-b3d45f
*/
