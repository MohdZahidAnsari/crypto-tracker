import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              Crypto Hunter
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;





// import React, { useContext } from "react";
// import { makeStyles } from "@material-ui/core";
// import axios from "axios";
// import { CryptoState } from "../CryptoContext";

// const useStyles = makeStyles(() => ({
//   // Your styles here
// }));

// const Header = () => {
//   const classes = useStyles();
//   const { currency, setCurrency } = useContext(CryptoState);

//   const handleCurrencyChange = (newCurrency) => {
//     setCurrency(newCurrency);

//     // Replace with your backend API endpoint to update exchange data
//     const updateExchangesEndpoint = "/update-exchanges"; 

//     // Update exchange data on currency change
//     axios.post(updateExchangesEndpoint, { currency: newCurrency })
//       .then((response) => {
//         console.log("Exchange data updated successfully.");
//       })
//       .catch((error) => {
//         console.error("Error updating exchange data:", error);
//       });
//   };

//   return (
//     <div className={classes.App}>
//       {/* Your header content */}
//       <select
//         value={currency}
//         onChange={(e) => handleCurrencyChange(e.target.value)}
//       >
//         <option value="USD">USD</option>
//         <option value="INR">INR</option>
//         {/* Add more currency options as needed */}
//       </select>
//       {/* ... */}
//     </div>
//   );
// };

// export default Header;
