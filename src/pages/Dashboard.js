import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import Search from "../components/Dashboard/Search";
import TabsComponent from "../components/Dashboard/Tabs";

import PaginationComponent from "../components/Dashboard/Pagination";
import TopButton from "../components/Common/TopButton";
import Footer from "../components/Common/Footer/footer";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  useEffect(() => {
    // Get 100 Coins
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  // var filteredCoins = coins.filter((coin) => {
  //   if (
  //     coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
  //     coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  //   ) {
  //     return coin;
  //   }
  // });

  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    // Value = new page number
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

// coins == 100 coins

// PaginatedCoins -> Page 1 - coins.slice(0,10)
// PaginatedCoins -> Page 2 = coins.slice(10,20)
// PaginatedCoins -> Page 3 = coins.slice(20,30)
// .
// .
// PaginatedCoins -> Page 10 = coins.slice(90,100)

// PaginatedCoins -> Page X , then initial Count = (X-1)*10
// coins.slice(initialCount,initialCount+10)
