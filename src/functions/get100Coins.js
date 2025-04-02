// axios are used to make http request(get,delete,patch etc)
import axios from "axios";
// we make a variable named coins and then we send a get request to the given api which fetch the data if the request is succcesful then the data which we received from api print it to console  and then return and if the request is fails then it give error in console then the function will return coins 
export const get100Coins = () => {
  const coins = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then((response) => {
      console.log("RESPONSE>>>", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error.message);
    });

  return coins;
};