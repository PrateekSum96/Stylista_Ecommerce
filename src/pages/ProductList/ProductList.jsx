import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import "./ProductList.css";
import { Filters } from "./ProductFilter";

export const ProductList = () => {
  const { showItem } = useContext(CartContext);
  console.log(showItem);
  return (
    <div className="product-list">
      <div className="filter-items">
        <Filters />
      </div>
      <div className="product">
        {showItem.map((item) => (
          <div className="product-card">
            <img src={item.image_url} alt={item.title} />
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
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
            <div className="price">
              <span>&#8377;{item.price}</span>
              <span className="original-price">
                &#8377;{item.original_price}
              </span>
            </div>

            <div className="btn">
              <button>Add to cart</button>
              <button>Add to wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
