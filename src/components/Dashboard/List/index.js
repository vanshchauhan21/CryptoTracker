import React, { useState } from "react";
import "./styles.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { convertNumber } from "../../../functions/convertNumber";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import StarIcon from "@mui/icons-material/Star";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function List({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
  return (
    <a href={`/coin/${coin.id}`}>
      <motion.tr
        className="list-row"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <Tooltip title="Coin Image">
          <td className="td-img">
            <img src={coin.image} className="coin-image coin-image-td" />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td className="td-info">
            <div className="info-flex">
              <p className="coin-symbol td-p">{coin.symbol}</p>
              <p className="coin-name td-p">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip
          title="Coin Price Percentage In 24hrs"
          placement="bottom-start"
        >
          {coin.price_change_percentage_24h >= 0 ? (
            <td>
              <div className="chip-flex">
                <div className="price-chip">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="chip-icon td-chip-icon">
                  <TrendingUpRoundedIcon />
                </div>
              </div>
            </td>
          ) : (
            <td>
              <div className="chip-flex">
                <div className="price-chip red">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="chip-icon td-chip-icon red">
                  <TrendingDownRoundedIcon />
                </div>
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Coin Price In USD" placement="bottom-end">
          {coin.price_change_percentage_24h >= 0 ? (
            <td className="current-price  td-current-price">
              ${coin.current_price.toLocaleString()}
            </td>
          ) : (
            <td className="current-price-red td-current-price">
              ${coin.current_price.toLocaleString()}
            </td>
          )}
        </Tooltip>
        <Tooltip title="Coin Total Volume" placement="bottom-end">
          <td className="coin-name td-totalVolume">
            {coin.total_volume.toLocaleString()}
          </td>
        </Tooltip>
        <Tooltip title="Coin Market Capital" placement="bottom-end">
          <td className="coin-name td-marketCap">
            ${coin.market_cap.toLocaleString()}
          </td>
        </Tooltip>
        <td className="coin-name mobile">${convertNumber(coin.market_cap)}</td>
        <td
          className={`watchlist-icon ${
            coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
          }`}
          onClick={(e) => {
            if (isCoinAdded) {
              // remove coin
              removeItemToWatchlist(e, coin.id, setIsCoinAdded);
            } else {
              setIsCoinAdded(true);
              saveItemToWatchlist(e, coin.id);
            }
          }}
        >
          {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
        </td>
      </motion.tr>
    </a>
  );
}

export default List;
