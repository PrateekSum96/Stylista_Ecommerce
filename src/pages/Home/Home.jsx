import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { CardCategory } from "../../components/Category/CardCategory";
import { FilterReducerContext } from "../../contexts/ReducerContext/ReducerContext";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import { CartListContext } from "../../contexts/CartContext/CartListContext";

export const Home = () => {
  const [showData, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { filterDispatch } = useContext(FilterReducerContext);
  const { isLoggedIn } = useContext(AuthContext);
  const { wishlistToShow } = useContext(WishListContext);
  const { cartToShow } = useContext(CartListContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      wishlistToShow();
      cartToShow();
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/categories");
        const jsonData = await response.json();
        setData(jsonData.categories);
        setLoader(false);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);

  return (
    <div className="home">
      {loader ? (
        <div className="loader">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <div className="header-image">
            <img
              id="header-img"
              src="https://res.cloudinary.com/dosmdkl9i/image/upload/v1689311297/Stylista/header01_b8p9k0.jpg"
              alt="header_image"
            />
          </div>

          <button
            id="btn-product-page"
            onClick={() => {
              filterDispatch({
                type: "CLEAR_FILTER",
              });
              navigate("/productList");
            }}
          >
            Shop Now
          </button>

          <div className="category-card">
            <div className="category">
              {showData.map((category) => (
                <div
                  className="card"
                  onClick={() => {
                    filterDispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: category.categoryName,
                    });
                    navigate("/productList");
                  }}
                >
                  <CardCategory category={category} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
