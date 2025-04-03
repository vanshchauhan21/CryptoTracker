import React, { useState, useEffect } from "react";
import "./styles.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from "framer-motion";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function Grid({ coin, delay }) {
  // Initialize watchlist and coin added state
  const [watchlist, setWatchlist] = useState(
    () => JSON.parse(localStorage.getItem("watchlist")) || []
  );
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist.includes(coin.id));

  // Effect to update watchlist in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist)); // Sync watchlist state with localStorage
  }, [watchlist]);

  const toggleWatchlist = (e, coinId) => {
    e.preventDefault();

    if (isCoinAdded) {
      // Remove coin from watchlist
      removeItemToWatchlist(e, coinId); // Call the remove function
      setWatchlist(watchlist.filter((coinIdInList) => coinIdInList !== coinId)); // Update state without reloading the page
    } else {
      // Add coin to watchlist
      saveItemToWatchlist(e, coinId); // Call the add function
      setWatchlist([...watchlist, coinId]); // Update state with the added coin
    }

    // Toggle state for UI feedback
    setIsCoinAdded(!isCoinAdded);
  };

  return (
    <a href={`/coin/${coin.id}`}>
      <motion.div
        className={`grid ${
          coin.price_change_percentage_24h < 0 && "grid-red"
        } `}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="img-flex">
          <img
            src={coin.image}
            className="coin-image"
            alt={`${coin.name} logo`}
          />

          <div className="icon-flex">
            <div className="info-flex">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
            <div
              className={`watchlist-icon ${
                coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
              }`}
              onClick={(e) => toggleWatchlist(e, coin.id)} // Pass event and coin ID to toggle watchlist
            >
              {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
            </div>
          </div>
        </div>

        <div className="chip-flex ">
          <div
            className={`price-chip ${
              coin.price_change_percentage_24h < 0 ? "red" : "green"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={`chip-icon ${
              coin.price_change_percentage_24h < 0 ? "red" : "green"
            }`}
          >
            {coin.price_change_percentage_24h >= 0 ? (
              <TrendingUpRoundedIcon />
            ) : (
              <TrendingDownRoundedIcon />
            )}
          </div>
        </div>
        <p
          className={
            coin.price_change_percentage_24h >= 0
              ? "current-price"
              : "current-price-red"
          }
        >
          ${coin.current_price.toLocaleString()}
        </p>

        <p className="coin-name">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="coin-name">
          Market Capital : ${coin.market_cap.toLocaleString()}
        </p>
      </motion.div>
    </a>
  );
}

export default Grid;
