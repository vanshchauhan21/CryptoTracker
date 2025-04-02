// this function take number as a parameter which is a timestamp in milliseconds 
// we make a date object which take number and then it convert to specific data and time 
// this function return date and month which is store in date variable
export const gettingDate = (number) => {
  const date = new Date(number);
  const formattedDate = date.toLocaleDateString(
    "en-US",
      {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      }
  );
  return formattedDate.replace(",", "").replace(/\d{2}$/, "'$&");
};
