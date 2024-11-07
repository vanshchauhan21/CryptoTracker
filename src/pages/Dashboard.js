import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import Search from "../components/Dashboard/Search";
import TabsComponent from "../components/Dashboard/Tabs";
import PaginationComponent from "../components/Dashboard/Pagination";
import TopButton from "../components/Common/TopButton";
import Footer from "../components/Common/Footer/footer";
import TopCoinsTable from "../components/Dashboard/TopCoinsTable/TopCoinsTable";
import TopNftsTable from "../components/Dashboard/TopNftsTable/TopNftsTable"; // Import new NFT Table

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [nfts, setNfts] = useState([]); // State for NFTs
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    // Get 100 Coins and Top NFTs
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      // Fetch top coins (100)
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      // Top 5 coins (just like your existing code)
      const topCoins = response.data.slice(0, 5);
      const coinsWithPriceData = await Promise.all(
        topCoins.map(async (coin) => {
          const priceResponse = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=7`
          );
          return {
            ...coin,
            prices: priceResponse.data.prices,
          };
        })
      );

      setCoins(response.data);
      setPaginatedCoins(response.data.slice(0, 10));
      setTopCoins(coinsWithPriceData);

      // Fetch Top 5 NFTs data (replace this with actual API if available)
      const nftResponse = await axios.get(
        "https://api.example.com/top_nfts" // Placeholder for actual API
      );

      setNfts(nftResponse.data); // Assume this returns a list of NFTs with price, change %, and volume

      setLoading(false);

    } catch (error) {
      // Handle errors
      if (error.response) {
        if (error.response.status === 429) {
          console.error("Rate limit exceeded. Try again later.");
        } else {
          console.error("API error:", error.response.data);
        }
      } else if (error.request) {
        console.error("Network error:", error.message);
      } else {
        console.error("Error:", error.message);
      }
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} handleChange={handleChange} />

          {/* Top Coins Table */}
          <TopCoinsTable topCoins={topCoins} />

          {/* Top 5 NFTs Table */}
          <TopNftsTable nfts={nfts} />

          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
      <TopButton />
      {/* <Footer /> */}
    </>
  );
}

export default Dashboard;
