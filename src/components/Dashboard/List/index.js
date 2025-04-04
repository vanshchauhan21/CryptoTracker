import React, { useState } from "react";
import "./styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { convertNumber } from "../../../functions/convertNumber";
import { motion } from "framer-motion";
import { Tooltip, Typography } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import StarIcon from "@mui/icons-material/Star";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function List({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  return (
    // <div style={{display: "flex", flexDirection: "row", width: "930px", height: "192px",gap: "30px"}}>
    <a href={`/coin/${coin.id}`}>
      <motion.tr
        className={`list-row ${
          coin.price_change_percentage_24h < 0 && "list-row-red"
        }`}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
      <div style={{width: "448px", height: "190px", backgroundColor: "#FFFFFF", border: "1.5px solid rgba(201,201,201,0.6)", borderRadius: "20px"}}>
        <Card sx={{width: "442px", height: "184px", backgroundColor: "#FFFFFF", border: "3px solid rgba(0,0,0,0.05)", borderRadius: "20px", boxShadow: "none"}}>
          <div style={{position: "relative", width: "405px", height: "163px", left: "18px", top: "10px", display: "flex", flexDirection: "row"}}>
            <div style={{display: "flex", flexDirection: "column",width: "285px", height: "147px", top: "3px", gap: "30px"}}>
              <div style={{display: "flex", flexDirection: "row",width: "260px", height: "30px", gap: "10px"}}>
                <td className="td-img">
                  <Tooltip title="Coin Image" placement="top"
                    slotProps={{
                      popper: {
                        modifiers: [
                          {
                            name: 'offset',
                            options: {
                              offset: [0, -10],
                            },
                          },
                        ],
                      },
                    }}
                  >
                    <img
                      src={coin.image}
                      alt={`${coin.name} logo`}
                      className="coin image coin-image-td"
                    />
                  </Tooltip>
                </td>
                <td className="td-info" style={{width: "220px",height: "30px",margin: 0, padding: 0}}>
                  <div className="info">
                    <Tooltip title="Coin Info" placement="top-start"><div className="name">{coin.name}</div></Tooltip>
                    <Tooltip title="Coin Info" placement="top"><div className="symbol">{coin.symbol}</div></Tooltip>
                  </div>
                </td>
              </div>
              <CardContent sx={{width: "285px", height: "87px", padding: 0, display: "flex",flexDirection: "column", gap: "15px"}}>
                <Typography sx={{width: "285px", height: "19px", padding: 0, display: "flex", flexDirection: "row"}}>
                  <div style={{display: "flex",width: "285px", height: "19px"}}>
                    <div style={{padding: 0, margin: 0, height: "19px", width: "110px", fontSize: "16px", fontWeight: 400}}>Current Price : </div>
                    {coin.price_change_percentage_24h >= 0 ? (
                      <div className="current-price">
                        ${coin.current_price.toLocaleString()}
                      </div>
                      ) : (
                      <div className="current-red">
                        ${coin.current_price.toLocaleString()}
                      </div>
                    )}
                  </div>
                </Typography>
                <Typography sx={{width: "285px", height: "19px", padding: 0, display: "flex", flexDirection: "row"}}>
                  <div style={{padding: 0, margin: 0, height: "19px", width: "110px", fontSize: "16px", fontWeight: 400}}>Total Volume : </div>
                    <td className="coin-name td-Volume !text-white">
                      {coin.total_volume.toLocaleString()}
                    </td>
                </Typography>
                <Typography sx={{width: "285px", height: "19px", padding: 0, display: "flex", flexDirection: "row"}}>
                  <div style={{padding: 0, margin: 0, height: "19px", width: "120px", fontSize: "16px", fontWeight: 400}}>Market Capital : </div>
                    <td className="coin-name td-Cap !text-white">
                      ${coin.market_cap.toLocaleString()}
                    </td>
                    <td className="coin-name mobile">${convertNumber(coin.market_cap)}</td>
                </Typography>
              </CardContent>
            </div>
            <div style={{justifyContent: "space-between", position: "relative", display: "flex", flexDirection: "row", width: "123px", height: "25px",top: "5px",right: "3px", alignItems: "center"}}>
              <div style={{width: "98px", height: "25px"}}>
                <h1 style={{width: "98px", height: "25px", fontSize: "18px", fontWeight: 400, color: "rgba(234,0,0,1)", margin: 0, padding: 0}}>
                  {coin.price_change_percentage_24h >= 0 ? (
                    <td className="td-fixed">
                      <div className="chip-flex">
                        <Tooltip title="Coin Price Percentage In 24hrs" placement="top">
                          <div className="price-chip">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                          </div>
                        </Tooltip>
                          <div className="chip-icon td-chip-icon">
                            <TrendingUpRoundedIcon />
                          </div>
                      </div>
                    </td>
                  ) : (
                    <td>
                      <div className="chip-flex2">
                        <Tooltip title="Coin Price Percentage In 24hrs" placement="top"
                          slotProps={{
                            popper: {
                              modifiers: [
                                {
                                  name: 'offset',
                                  options: {
                                    offset: [0, -10],
                                  },
                                },
                              ],
                            },
                          }}
                        >
                          <div className="price-red">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                          </div>
                        </Tooltip>
                        <div className="chip-red">
                          <TrendingDownRoundedIcon />
                        </div>
                      </div>
                    </td>
                  )}
                </h1>
              </div>
              <div style={{width: "25px",height: "25px", top: "2px"}}>
                <div style={{width: "25px", height: "25px",borderRadius: "50%", position: "relative", top: "1px",justifyContent: "center",display: "flex"}}>
                  <div style={{width: "25px", height: "25px", backgroundColor: "rgba(0,0,0,0) !important",display: "flex", alignContent: "center", position: "relative", justifyContent: "center"}}>
                    <div style={{top: "1px",right: "-2px",width: "20px", height: "18px", border: "0.75px solid rgba(0,0,0,0.8) !important", padding: 0, margin: 0,position: "relative",display: "flex", justifyContent: "center"}}>
                      <td className={`watchlist-icon ${
                        coin.price_change_percentage_24h < 0 && "watchlist-red"
                      }`}
                      onClick={(e) => {
                        if (isCoinAdded) {
                          removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                        } else {
                          setIsCoinAdded(true);
                          saveItemToWatchlist(e, coin.id);
                        }
                      }}
                      >
                        {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
                      </td>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      </motion.tr>
    </a>
  );
}

export default List;
