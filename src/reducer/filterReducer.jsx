const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_PRICE":
      return { ...state, byPrice: action.payload };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SORT":
      return { ...state, sort: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, search: action.payload };
    case "FILTER_BY_CATEGORY":
      return { ...state, category: [...state.category, action.payload] };
    case "REMOVE_FROM_CATEGORY":
      return { ...state, category: action.payload };

    case "CLEAR_FILTER":
      return {
        byRating: 0,
        search: "",
        byPrice: "",
        sort: "",
        category: [],
      };
    default:
      return state;
  }
};

export { filterReducer };
