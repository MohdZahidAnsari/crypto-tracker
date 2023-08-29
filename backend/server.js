const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ExchangeSchema = new mongoose.Schema({
  name: String,
  icon: String,
});


const Exchange = mongoose.model("Exchange", ExchangeSchema);

app.get("/fetch-exchanges", async (req, res) => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/exchanges");
    const exchanges = response.data;

    for (const exchange of exchanges) {
      await Exchange.create({
        name: exchange.name,
        icon: exchange.image,
      });
    }


    
    res.status(200).json({ message: "Exchanges fetched and stored successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred." });
  }
});

app.get("/get-exchanges", async (req, res) => {
  try {
    const exchanges = await Exchange.find();
    res.status(200).json(exchanges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
