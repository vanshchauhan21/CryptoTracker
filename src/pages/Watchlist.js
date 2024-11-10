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

  const checkPriceAlerts = () => {
    coins.forEach((coin) => {
      const alertPrice = localStorage.getItem(`alert-${coin.id}`);
      if (alertPrice && parseFloat(alertPrice) <= coin.current_price) {
        alert(
          `Price alert! ${coin.name} has reached your target price of ${alertPrice}`
        );
        localStorage.removeItem(`alert-${coin.id}`); // Remove the alert after notifying
      }
    });
  };

  useEffect(() => {
    if (coins.length > 0) {
      checkPriceAlerts();
    }
  }, [coins]);

  const addPriceAlert = (coinId, price) => {
    localStorage.setItem(`alert-${coinId}`, price);
    alert(`Price alert set for ${coinId} at ${price}`);
  };

  return (
    <div>
      <Header />
      {watchlist.length > 0 ? (
        <>
          <div className="alert-section">
            <h2>Set Price Alerts</h2>
            {coins.map((coin) => (
              <div key={coin.id} className="alert-item">
                <span>{coin.name}</span>
                <input
                  type="number"
                  placeholder="Set target price"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addPriceAlert(coin.id, e.target.value);
                      e.target.value = ""; // Clear the input field after setting the alert
                    }
                  }}
                />
              </div>
            ))}
          </div>
          <TabsComponent coins={coins} />
        </>
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
