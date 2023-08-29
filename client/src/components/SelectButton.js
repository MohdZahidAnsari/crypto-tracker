import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "gold" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "gold",
        color: "black",
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;






// import React, { useContext } from "react";
// import { makeStyles } from "@material-ui/core";
// import { CryptoState } from "../CryptoContext";

// const useStyles = makeStyles(() => ({
//   selectbutton: {
//     // Your button styles here
//   },
// }));

// const SelectButton = ({ children, selected, onClick, exchangeData }) => {
//   const classes = useStyles();
//   const { currency, symbol } = useContext(CryptoState);

//   const formattedExchangeData = exchangeData
//     ? `${symbol} ${exchangeData.toFixed(2)}`
//     : "";

//   return (
//     <span onClick={onClick} className={classes.selectbutton}>
//       {children}
//       {formattedExchangeData}
//     </span>
//   );
// };

// export default SelectButton;
