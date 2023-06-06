import { useContext } from "react";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import "./Cart.css";

export const Cart = () => {
  const { cart, removeFromCart } = useContext(CartListContext);

  console.log("cart", cart);
  return (
    <div>
      <div>
        {cart.length === 0 ? (
          <h1>Your cart is empty!!</h1>
        ) : (
          cart.map(
            (cartItem) => (
              //
              <div className="cart-card">
                <img src={cartItem.image_url} alt={cartItem.title} />
                <div className="cart-info">
                  <div className="cart-title">{cartItem.title}</div>
                  <div className="cart-description">{cartItem.description}</div>
                  <div className="cart-price">
                    <div>&#8377;{cartItem.price}</div>
                    <div className="cart-original-price">
                      &#8377;{cartItem.original_price}
                    </div>
                  </div>
                  <div className="cart-btn">
                    <button onClick={() => removeFromCart(cartItem)}>
                      Remove from Cart
                    </button>
                    <button>Add To WishList</button>
                  </div>
                </div>
              </div>
            )
            //
          )
        )}
      </div>
    </div>
  );
};
