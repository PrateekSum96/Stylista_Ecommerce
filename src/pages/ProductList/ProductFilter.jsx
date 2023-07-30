import { useContext } from "react";
import "./ProductFilter.css";
import { FilterReducerContext } from "../../contexts/ReducerContext/ReducerContext";

export const Filters = () => {
  const {
    filterState: { byPrice, byRating, sort, category },
    filterDispatch,
  } = useContext(FilterReducerContext);

  const addToCategory = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      filterDispatch({
        type: "FILTER_BY_CATEGORY",
        payload: value,
      });
    } else {
      const newCategory = category.filter((name) => name !== value);
      filterDispatch({
        type: "REMOVE_FROM_CATEGORY",
        payload: newCategory,
      });
    }
  };
  return (
    <div>
      <input type="checkbox" id="openSideBar" />
      <label htmlFor="openSideBar" className="sideBarIconToggle">
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner bottom"></div>
        <div className="filter-title">Filters</div>
      </label>

      <div className="filters">
        <div className="filter-clear">
          <span>Filter</span>
          <button
            id="clear-btn"
            onClick={() => {
              filterDispatch({
                type: "CLEAR_FILTER",
              });
            }}
          >
            Clear
          </button>
        </div>
        <hr />
        <div>
          <div className="filter-name">Price</div>
          <input
            type="range"
            min="500"
            max="5000"
            value={byPrice}
            step={500}
            list="price"
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: e.target.value,
              })
            }
          />
          <datalist id="price">
            <option value="500" label="500"></option>
            <option value="1000" label=""></option>
            <option value="2500" label="2500"></option>
            <option value="2000" label=""></option>
            <option value="5000" label="5000"></option>
          </datalist>
        </div>
        <hr />
        {/* Categories */}
        <div>
          <div className="filter-name">Categories</div>
          <div>
            <input
              type="checkbox"
              id="men"
              value={"Men"}
              checked={category.includes("Men")}
              onChange={(e) => {
                addToCategory(e);
              }}
            />
            <label htmlFor="men"> Men </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="women"
              checked={category.includes("Women")}
              value={"Women"}
              onChange={(e) => {
                addToCategory(e);
              }}
            />
            <label htmlFor="women"> Women </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="kid"
              value={"Kids"}
              checked={category.includes("Kids")}
              onChange={(e) => {
                addToCategory(e);
              }}
            />
            <label htmlFor="kid"> Kid </label>
          </div>
          <hr />
        </div>
        <div>
          <div className="filter-name">Rating</div>
          <div>
            <input
              type="range"
              min="1"
              max="5"
              list="rating"
              value={byRating}
              step={1}
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_RATING",
                  payload: e.target.value,
                })
              }
            />
            <datalist id="rating">
              <option value="1" label="1"></option>
              <option value="2" label="2"></option>
              <option value="3" label="3"></option>
              <option value="4" label="4"></option>
              <option value="5" label="5"></option>
            </datalist>
          </div>
          <hr />
          <div>
            <div className="filter-name">Sort by price</div>
            <div>
              <div>
                <input
                  type="radio"
                  name="sort"
                  id="l2h"
                  onChange={() =>
                    filterDispatch({
                      type: "FILTER_BY_SORT",
                      payload: "l2h",
                    })
                  }
                  checked={sort === "l2h"}
                />
                <label htmlFor="l2h"> Low-to-High </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="sort"
                  id="h2l"
                  onChange={() =>
                    filterDispatch({
                      type: "FILTER_BY_SORT",
                      payload: "h2l",
                    })
                  }
                  checked={sort === "h2l"}
                />
                <label htmlFor="h2l"> High-to-Low </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
