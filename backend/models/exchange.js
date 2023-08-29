const mongoose = require('mongoose');

const exchangeSchema = new mongoose.Schema({
  currency: String,
  // Add other fields as needed, such as exchange rates, icons, etc.
});

const ExchangeModel = mongoose.model('Exchange', exchangeSchema);

module.exports = ExchangeModel;
