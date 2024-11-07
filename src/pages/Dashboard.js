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

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [topCoins, setTopCoins] = useState([]);
  const [topNFTs, setTopNFTs] = useState([]); // State for top 5 NFTs

  useEffect(() => {
    // Get 100 Coins and Top NFTs
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      // Fetching coin data
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      // Fetching NFT data (Note: You may need to replace this with an actual NFT API endpoint)
      const nftResponse = await axios.get(
        "https://api.coingecko.com/api/v3/nfts/market_data?vs_currency=usd&order=market_cap_desc&per_page=5&page=1"
      );

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
      setTopNFTs(nftResponse.data); // Set top NFTs data
      setLoading(false);
    } catch (error) {
      console.log("ERROR>>>", error.message);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    const initialCount = (value - 1) * 10;
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
          <TopCoinsTable topCoins={topCoins} />
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

          {/* Top NFTs Table */}
          <div className="top-nfts-container">
            <h2>Top 5 NFTs</h2>
            <table className="top-nfts-table">
              <thead>
                <tr>
                  <th>NFT</th>
                  <th>Price (USD)</th>
                  <th>24h Change</th>
                  <th>24h Volume</th>
                </tr>
              </thead>
              <tbody>
                {topNFTs.map((nft) => (
                  <tr key={nft.id}>
                    <td>{nft.name}</td>
                    <td>{nft.current_price}</td>
                    <td>{nft.price_change_percentage_24h}%</td>
                    <td>{nft.total_volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <TopButton />
      {/* <Footer /> */}
    </>
  );
}

export default Dashboard;
