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

      // Fetch Top 5 NFTs from CoinGecko with retry logic
      const nftResponse = await fetchNftsWithRetry(); // Retry logic for NFTs

      setNfts(nftResponse.data); // Assuming this returns a list of NFTs with price, change %, and volume

      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error("Rate limit exceeded. Trying again...");
        // Retry after a delay of 1 minute (60,000 ms)
        setTimeout(() => {
          getData();
        }, 60000);  // Retry after 1 minute
      } else {
        console.error("API error:", error.message);
      }
      setLoading(false);
    }
  };

  // Retry function for fetching NFTs
  const fetchNftsWithRetry = async () => {
    try {
      const nftResponse = await axios.get(
        "https://api.coingecko.com/api/v3/collections/markets?order=market_cap_desc&per_page=5&page=1"
      );
      return nftResponse;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error("Rate limit exceeded for NFT request. Retrying...");
        // Retry logic for NFT request with delay
        await new Promise((resolve) => setTimeout(resolve, 60000));  // Wait 1 minute before retry
        return fetchNftsWithRetry();  // Retry the request
      } else {
        throw error; // Re-throw error if it's not 429
      }
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter coins based on search term
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
