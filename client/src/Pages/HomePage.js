import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";

const Homepage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Homepage;






// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [exchanges, setExchanges] = useState([]);

//   useEffect(() => {
//     // Fetch exchange data from your backend
//     axios.get("/get-exchanges").then((response) => {
//       setExchanges(response.data);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Homepage</h1>
//       <h2>Exchange List</h2>
//       <ul>
//         {exchanges.map((exchange) => (
//           <li key={exchange._id}>
//             <img src={exchange.icon} alt={exchange.name} width="20" height="20" />
//             {exchange.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HomePage;
