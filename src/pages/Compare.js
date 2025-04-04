import React, { useEffect, useState } from "react";
import Info from "../components/CoinPage/Info";
// import LineChart from "../components/CoinPage/LineChart";
import ToggleComponents from "../components/CoinPage/ToggleComponent";
import Header from "../components/Common/Header";
// import Loader from "../components/Common/Loader";
import SelectCoins from "../components/ComparePage/SelectCoins";
import List from "../components/Dashboard/List";
import { get100Coins } from "../functions/get100Coins";
import { getCoinData } from "../functions/getCoinData";
import { getPrices } from "../functions/getPrices";
import { settingChartData } from "../functions/settingChartData";
import { settingCoinObject } from "../functions/settingCoinObject";
import { Page } from "../components/ComparePage/Chart";
import IconPositionTabs from "../components/ComparePage/ChartTab/Tabs";
import Selectdays from "../components/ComparePage/SelectDays";
import Skeleton from '@mui/material/Skeleton';

function Compare() {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  setTimeout(()=>setLoading(false) , 5000)
  // id states
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  // data states
  const [coin1Data, setCoin1Data] = useState({});
  const [coin2Data, setCoin2Data] = useState({});
  // days state
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{data:[]},{data:[]}],
  });

  useEffect(() => {
    getData();
  },  [crypto1, crypto2, priceType, days]);

  const getData = async () => {
    setLoading(true);
    const coins = await get100Coins();
    if (coins) {
      setAllCoins(coins);
      const data1 = await getCoinData(crypto1);
      const data2 = await getCoinData(crypto2);
      settingCoinObject(data1, setCoin1Data);
      settingCoinObject(data2, setCoin2Data);
      if (data1 && data2) {
        // getPrices
        const prices1 = await getPrices(crypto1, days, priceType);
        const prices2 = await getPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2, data1, data2);
        setLoading(false);
      }
    }
  };

  const onCoinChange = async (e, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      const newCrypto2 = e.target.value;
      // crypto2 is being changed
      setCrypto2(newCrypto2);
      // fetch coin2 data
      const data2 = await getCoinData(newCrypto2);
      settingCoinObject(data2, setCoin2Data);
      // fetch prices again
      const prices1 = await getPrices(crypto1, days, priceType);
      const prices2 = await getPrices(newCrypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2,data2);
    } else {
      const newCrypto1 = e.target.value;
      // crypto1 is being changed
      setCrypto1(newCrypto1);
      // fetch coin1 data
      const data1 = await getCoinData(newCrypto1);
      settingCoinObject(data1, setCoin1Data);
      // fetch coin prices
      const prices1 = await getPrices(newCrypto1, days, priceType);
      const prices2 = await getPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2,data1);
    }
    setLoading(false);
  };

  const handleDaysChange = async (e) => {
    const newDays = e.target.value;
    setLoading(true);
    setDays(newDays);
    const prices1 = await getPrices(crypto1, newDays, priceType);
    const prices2 = await getPrices(crypto2, newDays, priceType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  const handlePriceTypeChange = async (e) => {
    const newPriceType = e.target.value;
    setLoading(true);
    setPriceType(newPriceType);
    const prices1 = await getPrices(crypto1, days, newPriceType);
    const prices2 = await getPrices(crypto2, days, newPriceType);
    settingChartData(setChartData , prices1, prices2);
    setLoading(false);
  };

  return (
    <div>
      {(loading ?
      (
        <div>
          <Skeleton variant="rectangular" height="70px"/>
          <div style={{position: "relative", display: "flex", flexDirection: "column", width: "1782px", height: "auto", padding: "80px 50px 100px", gap: "3rem"}}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Skeleton variant="rounded" sx={{ borderRadius: '5px' }}  width="290px" height="40px" /> 
              <Skeleton variant="rounded" sx={{ borderRadius: '5px' }} width="290px" height="40px" />
            </div>
            <div style={{display: "flex", flexDirection: "row", width: "930px", height: "192px",gap: "34px"}}>
              <div style={{ border:"4px solid rgba(0, 0, 0, 0.11)" , borderRadius: "20px",width:"448px" ,height:"190px"}} >
                <div style={{position: "relative", width: "405px", height: "163px", left: "18px", top: "10px", gap: "20px", display: "flex",flexDirection: "column"}}>
                  <div style={{display: "flex", gap: "10px"}}>
                    <Skeleton variant="circular" width="30px" height="30px" />
                    <Skeleton variant="text" sx={{ fontSize: "30px", width:"365px"}} />
                  </div>
                  <div style={{height: "87px",display: "flex", gap: "15px", flexDirection: "column"}}>
                    <Skeleton variant="text" sx={{ fontSize: "19px", width:"285px"}} />
                    <Skeleton variant="text" sx={{ fontSize: "19px", width:"285px"}} />
                    <Skeleton variant="text" sx={{ fontSize: "19px", width:"200px"}} />
                  </div>
                </div>              
              </div> 
              <div style={{ border:"4px solid rgba(0, 0, 0, 0.11)" , borderRadius: "20px",width:"448px" ,height:"190px"}} >
                <div style={{position: "relative", width: "405px", height: "163px", left: "18px", top: "10px", gap: "20px", display: "flex",flexDirection: "column"}}>
                  <div style={{display: "flex", gap: "10px"}}>
                    <Skeleton variant="circular" width="30px" height="30px" />
                    <Skeleton variant="text" sx={{ fontSize: "30px", width:"365px"}} />
                  </div>
                  <div style={{height: "87px",display: "flex", gap: "15px", flexDirection: "column"}}>
                    <Skeleton variant="text" sx={{ fontSize: "19px", width:"285px"}} />
                    <Skeleton variant="text" sx={{ fontSize: "19px", width:"285px"}} />
                    <Skeleton variant="text" sx={{ fontSize: "19px", width:"285px"}} />
                  </div>
                </div>              
              </div>
            </div>
            <div 
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}>
              <Skeleton variant="rounded" sx={{ borderRadius: '5px' }} width="448px" height="48px"/> 
              <Skeleton variant="rounded" sx={{ borderRadius: '5px' }} width="200px" height="40px"/>
            </div>
            <div style={{display: "flex",gap: "10px", justifyContent: "center"}}>
              <Skeleton variant="rounded" sx={{ borderRadius: '5px' }} width="129px" height="50px"/>
              <Skeleton variant="rounded" sx={{ borderRadius: '5px' }} width="129px" height="50px"/>
            </div>
            <div>
              <Skeleton variant="rounded" width="94.5vw" height="40vh"/> 
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "23.3rem",alignItems: "flex-start"}}>
              <div style={{ borderRadius: "10px", width:"700px", height:"246px",border:"2px solid rgba(0, 0, 0, 0.11)"}}>
                <div style={{position: "relative",width: "620px", height: "179px", top: "36px", left: "40px", padding: "0 !important", margin:0,gap: "10px",display: "flex", flexDirection: "column"}}>
                  <Skeleton variant="rounded" sx={{ borderRadius: '5px' }} width="620px" height="22px"/> 
                  <Skeleton variant="rounded" sx={{ borderRadius: '5px' }} width="620px" height="138px"/>
                </div>
              </div>
              <div style={{ borderRadius: "10px", width:"700px", height:"246px", border:"2px solid rgba(0, 0, 0, 0.11)"}}>
                <div style={{position: "relative",width: "620px", height: "179px", top: "36px", left: "40px", padding: "0 !important", margin:0,gap: "10px",display: "flex", flexDirection: "column"}}>
                  <Skeleton variant="rounded" sx={{ borderRadius: '5px' }} width="620px" height="22px"/> 
                  <Skeleton variant="rounded" sx={{ borderRadius: '5px' }} width="620px" height="138px"/>
                </div>
              </div>
            </div>
          </div> 
        </div>
      ):(
        <>
          <Header />
          <div style={{ position: "relative",width: "1882px",height: "auto", marginTop: "70px"}}>
            <div style={{position: "relative", display: "flex", flexDirection: "column", width: "1782px", height: "auto",paddingLeft: "50px", paddingRight: "50px", paddingTop: "80px",paddingBottom: "100px", gap: "3rem"}}>
              <div
                style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                }}
              >
                <SelectCoins
                allCoins={allCoins}
                crypto1={crypto1}
                crypto2={crypto2}
                onCoinChange={onCoinChange}
                />
              </div>
              <div style={{display: "flex", flexDirection: "row", width: "930px", height: "192px",gap: "34px"}}>
                <List coin={coin1Data} />
                <List coin={coin2Data} />
              </div>
              <div
                style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                }}
              >
                <ToggleComponents
                priceType={priceType}
                handlePriceTypeChange={handlePriceTypeChange}
                />
                <Selectdays
                days={days}
                handleDaysChange={handleDaysChange}
                />
              </div>
              <div style={{display: "flex", gap: "10px", height: "50px", justifyContent: "center"}}>
                <IconPositionTabs coin={coin1Data} />
                <IconPositionTabs coin={coin2Data} />
              </div>
              <div style={{height: "40vh", width: "94.5vw",  display: "flex"}}> 
                <Page chartData={chartData} multiAxis={true}/>
              </div>
              <div style={{display: "flex", flexDirection: "row", gap: "23.3rem",alignItems: "flex-start"}}>
                <Info title={coin1Data.name}desc={coin1Data.desc} />
                <Info title={coin2Data.name} desc={coin2Data.desc} />
              </div>
            </div>
          </div>  
        </>
      ))}
    </div>
  );
}

export default Compare;