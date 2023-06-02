import "./ProductFilter.css";

export const Filters = () => {
  return (
    <div>
      <input type="checkbox" id="openSideBar" />
      <label htmlFor="openSideBar" className="sideBarIconToggle">
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner bottom"></div>
      </label>

      <div className="filters">
        <div className="filter-clear">
          <span>Filter</span>
          <span>clear</span>
        </div>
        <hr />
        <div>
          <p>Price</p>
          <input type="range" />
        </div>
        <hr />
        <div>
          <p>Categories</p>
          <div>
            <input type="checkbox" id="men" />
            <label htmlFor="men">Men</label>
          </div>
          <div>
            <input type="checkbox" id="women" />
            <label htmlFor="women">Women</label>
          </div>
          <div>
            <input type="checkbox" id="kid" />
            <label htmlFor="kid">Kid</label>
          </div>
          <hr />
        </div>
        <div>
          <p>Rating</p>
          <div>
            <input type="radio" name="rating" id="star-4" />
            <label htmlFor="star-4">4 stars & above</label>
          </div>
          <div>
            <input type="radio" name="rating" id="star-3" />
            <label htmlFor="star-3">3 stars & above</label>
          </div>
          <div>
            <input type="radio" name="rating" id="star-2" />
            <label htmlFor="star-2">2 stars & above</label>
          </div>
          <div>
            <input type="radio" name="rating" id="star-1" />
            <label htmlFor="star-1">1 stars & above</label>
          </div>
          <hr />
          <div>
            <p>Sort by price</p>
            <div>
              <div>
                <input type="radio" name="sort" id="l2h" />
                <label htmlFor="l2h">price - Low-to-High</label>
              </div>
              <div>
                <input type="radio" name="sort" id="h2l" />
                <label htmlFor="h2l">price - High-to-Low</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
