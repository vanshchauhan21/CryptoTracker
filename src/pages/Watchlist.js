import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";

// Import animation data
import Lottie from "react-lottie";
import animationData from "../assets/emptyanimation.json";

function Watchlist() {
  const [watchlist, setWatchlist] = useState(() => {
    // Get the watchlist from localStorage or return an empty array as default
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist.length > 0) {
      getData();
    }
  }, [watchlist]); // Run this whenever the watchlist changes

  const getData = async () => {
    try {
      const allCoins = await get100Coins();
      if (allCoins) {
        setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
      }
    } catch (error) {
      console.error("Error fetching coins: ", error);
    }
  };

  // Animation options for the Lottie component
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Header />
      {watchlist.length > 0 ? (
        <TabsComponent coins={coins} />
      ) : (
        <div className="h-[500px] flex flex-col justify-center items-center">
          {/* Animation */}
          <Lottie options={defaultOptions} height={250} width={200} />
          <h1>Sorry, No Items In The Watchlist.</h1>
          <div>
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
