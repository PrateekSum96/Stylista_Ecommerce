import { createContext, useReducer } from "react";
import { filterReducer } from "../../reducer/filterReducer";

const FilterReducerContext = createContext();

const FilterReducerProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byRating: 0,
    search: "",
    byPrice: "",
    sort: "",
    category: [],
  });
  return (
    <FilterReducerContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterReducerContext.Provider>
  );
};

export { FilterReducerContext, FilterReducerProvider };
