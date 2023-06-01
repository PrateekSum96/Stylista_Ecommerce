import { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
export const Home = () => {
  const [showData, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/categories");
        const jsonData = await response.json();
        console.log(jsonData.categories);
        setData(jsonData.categories);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);
  return (
    <div className="home">
      <div className="header-image">
        <img src="./image/header01.jpg" alt="header_image" />
        <NavLink to="/productList">Shop Now</NavLink>
      </div>
      <div className="category">
        {showData.map((category) => (
          <div className="card">
            <img src={category.url} alt={category.categoryName} />
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
