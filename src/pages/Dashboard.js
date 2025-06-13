import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import Search from "../components/Dashboard/Search";
import TabsComponent from "../components/Dashboard/Tabs";
import PaginationComponent from "../components/Dashboard/Pagination";
import TopButton from "../components/Common/TopButton";
import Footer from "../components/Footer";
import TopCoinsTable from "../components/Dashboard/TopCoinsTable/TopCoinsTable";
import TopNftsTable from "../components/Dashboard/TopNftsTable/TopNftsTable"; // Import new NFT Table
import axios from 'axios';

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [nfts, setNfts] = useState([]); // State for NFTs
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    // Get 100 Coins and Top NFTs (Static data for NFTs)
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    // Static data for NFTs
    setNfts(getStaticNFTData());
    try {
      // Fetch top coins (100) - using CoinGecko API as before
      const coinsResponse = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      // Top 5 coins (just like your existing code)
      const topCoins = coinsResponse.data.slice(0, 5);
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

      setCoins(coinsResponse.data);
      setPaginatedCoins(coinsResponse.data.slice(0, 10));
      setTopCoins(coinsWithPriceData);



      setLoading(false);
    } catch (error) {
      console.log("Coin API error:", error.message);
      setLoading(false);
    }
  };

  // Static NFT data (replace this with your own NFT data)
  const getStaticNFTData = () => {
    return [
      {
        id: 1,
        name: "CryptoPunk",
        image_url: "https://cryptoslam.io/images/crypto-punks/7804.png",
        price: "4200 ETH",
        volume: "24.5 ETH",
        change: "+10%",
      },
      {
        id: 2,
        name: "Bored Ape Yacht Club",
        image_url: "https://cryptoslam.io/images/bored-ape-yacht-club/1208.png",
        price: "90 ETH",
        volume: "1500 ETH",
        change: "-2%",
      },
      {
        id: 3,
        name: "Art Blocks Curated",
        image_url: "https://cryptoslam.io/images/art-blocks/3561.png",
        price: "45 ETH",
        volume: "220 ETH",
        change: "+5%",
      },
      {
        id: 4,
        name: "Cool Cats",
        image_url: "https://cryptoslam.io/images/cool-cats/1234.png",
        price: "10 ETH",
        volume: "30 ETH",
        change: "-1%",
      },
      {
        id: 5,
        name: "World of Women",
        image_url: "https://cryptoslam.io/images/world-of-women/2335.png",
        price: "7.5 ETH",
        volume: "12.2 ETH",
        change: "+7%",
      },
    ];
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  var filteredNfts = nfts.filter(
    (nft) =>
      nft.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      nft.volume.toLowerCase().includes(search.trim().toLowerCase())
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

          {/* Top 5 NFTs Table (using static data) */}
          <TopNftsTable nfts={search ? filteredNfts : nfts} />

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
      <Footer />
    </>
  );
}

export default Dashboard;
