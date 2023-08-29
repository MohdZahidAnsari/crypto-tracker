import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};




// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const Crypto = createContext();

// const CryptoContext = ({ children }) => {
//   const [currency, setCurrency] = useState("INR");
//   const [symbol, setSymbol] = useState("₹");
//   const [exchangeData, setExchangeData] = useState(null);

//   // Fetch updated exchange data based on the selected currency
//   const fetchExchangeData = async () => {
//     try {
//       const response = await axios.get(`/get-exchange-data?currency=${currency}`);
//       setExchangeData(response.data.exchangeData);
//     } catch (error) {
//       console.error("Error fetching exchange data:", error);
//     }
//   };

//   useEffect(() => {
//     if (currency === "INR") setSymbol("₹");
//     else if (currency === "USD") setSymbol("$");
//     fetchExchangeData();
//   }, [currency]);

//   return (
//     <Crypto.Provider value={{ currency, setCurrency, symbol, exchangeData }}>
//       {children}
//     </Crypto.Provider>
//   );
// };

// export default CryptoContext;

// export const CryptoState = () => {
//   return useContext(Crypto);
// };
