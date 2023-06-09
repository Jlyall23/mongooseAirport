const Flight = require('../models/flightSchema');

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights });
  });
}

function newFlight(req, res) {
  res.render('flights/new');
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    res.redirect('/flights');
  });
}

module.exports = {
  index,
  new: newFlight,
  create
};