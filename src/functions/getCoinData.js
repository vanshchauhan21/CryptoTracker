import axios from "axios";
// this function takes two parameter one is id and set error 
// we make a variable named coin and then we send a get request to the given api which fetch the data if the request is succcesful then we check data exists or not if exits then the data which we received from api get return and if the request is fails then it give error in console and set error will set to true then the function will return coins 
export const getCoinData = (id, setError) => {
  const coin = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((e) => {
      console.log(e.message);
      if (setError) {
        setError(true);
      }
    });

  return coin;
};
