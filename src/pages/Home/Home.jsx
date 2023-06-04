import { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Card_Category } from "../../components/CardCategory";
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
            <img src="./image/header01.jpg" alt="header_image" />
            <NavLink to="/productList">Shop Now</NavLink>
          </div>

          <div className="category">
            {showData.map((category) => (
              <div className="card">
                <Card_Category category={category} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
