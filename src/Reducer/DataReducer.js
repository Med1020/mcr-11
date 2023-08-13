const DataReducer = (data, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [...data, action.payload];
    default:
      return [...data];
  }
};

export default DataReducer;
