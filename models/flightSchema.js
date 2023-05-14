const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true
  },
  flightNo: {
    type: Number,
    required: true
  },
  departs: {
    type: String,
    default: 'Departs',
    validate: {
      validator: function(v) {
        return v !== 'Arrives';
      },
      message: 'Departs must not be equal to Arrives'
    }
  },
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    default: 'SAN'
  },
  destinations: {
    type: [destinationSchema]
  }
});

const FlightSchema = mongoose.model('Flight', flightSchema);

