const express = require('express');
const router = express.Router();
const ExchangeModel = require('../models/exchange'); // Your exchange data model

// Route to get exchange data based on currency
router.get('/get-exchange-data', async (req, res) => {
  try {
    const { currency } = req.query; // Get currency from query parameter
    const exchangeData = await ExchangeModel.findOne({ currency });

    if (!exchangeData) {
      return res.status(404).json({ error: 'Exchange data not found for the selected currency' });
    }

    res.status(200).json(exchangeData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
