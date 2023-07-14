import { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { CardCategory } from "../../components/Category/CardCategory";
export const Home = () => {
  const [showData, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/categories");
        const jsonData = await response.json();
        console.log(jsonData.categories);
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
          <NavLink to="/productList" id="link-product-page">
            <button id="btn-product-page"> Shop Now</button>
          </NavLink>
          <div className="category-card">
            <div className="category">
              {showData.map((category) => (
                <div className="card">
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
