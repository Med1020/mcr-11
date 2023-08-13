const WatchListReducer = (watchlist, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return [...watchlist, action.payload];

    case "DELETE_FROM_WATCHLIST":
      return {
        ...watchlist.filter(({ title }) => title === action.payload.title),
      };

    default:
      return { ...watchlist };
  }
};

export default WatchListReducer;
