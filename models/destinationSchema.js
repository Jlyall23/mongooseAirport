const destinationSchema = new mongoose.Schema({
    airport: {
      type: String,
      enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
      type: Date
    }
  });