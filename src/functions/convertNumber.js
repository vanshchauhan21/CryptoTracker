export const convertNumber = (number) => {
  if (number >= 1e12) {
    // Trillions
    return (number / 1e12).toFixed(2).replace(/\.?0+$/, "") + "T";
  } else if (number >= 1e9) {
    // Billions
    return (number / 1e9).toFixed(2).replace(/\.?0+$/, "") + "B";
  } else if (number >= 1e6) {
    // Millions
    return (number / 1e6).toFixed(2).replace(/\.?0+$/, "") + "M";
  } else if (number >= 1e3) {
    // Thousands
    return (number / 1e3).toFixed(2).replace(/\.?0+$/, "") + "K";
  } else {
    // Hundreds or less, return as is with commas
    return number.toLocaleString();
  }
};
