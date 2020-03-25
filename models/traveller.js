const Journey= require("./journey.js")

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(journey => {
    return journey.startLocation;
  });
  return startLocations;

};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(journey => {
    return journey.endLocation;
  });
  return endLocations;

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter(journey => {
    return journey.transport === transport;
  })
  return journeysByTransport;

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysWithMinDistace = this.journeys.filter(journey => {
    return journey.distance >= minDistance;
  })
  return journeysWithMinDistace;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const methodsOfTransport = this.journeys.map(journey => journey.transport);
	return methodsOfTransport.filter(
		(transport, index) => methodsOfTransport.indexOf(transport) === index
	);
};


module.exports = Traveller;
