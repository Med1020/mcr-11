const FilterReducer = (filters, action) => {
  switch (action.type) {
    case "GENRE":
      return { ...filters, genre: action.payload };

    case "RATING":
      return { ...filters, rating: action.payload };

    case "YEAR":
      return { ...filters, releaseYear: action.payload };

    default:
      return { ...filters };
  }
};

export default FilterReducer;
