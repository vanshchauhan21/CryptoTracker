import { toast } from "react-toastify";

// Capitalize the first letter of the coin id (assuming coin id is a string)
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const saveItemToWatchlist = (e, id) => {
    e.preventDefault(); // Should now work

    let watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
    const capitalizedId = capitalizeFirstLetter(id); // Capitalize for display

    if (!watchlist.includes(id)) {
      // Add the item to the watchlist
      watchlist.push(id);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      toast.success(`${capitalizedId} - added to the watchlist`);
    } else {
      // Item is already in the watchlist
      toast.error(`${capitalizedId} - is already added to the watchlist!`);
    }
  };
