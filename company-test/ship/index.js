class Ship {
    
}

class MotorBoat extends Ship {}
class Sailboat extends Ship {}
class CruiseShip extends Ship {}

class Shipyard {}

const motorBoat = new MotorBoat(1000, "Blue");
const sailboat = new Sailboat(500);
const cruiseShip = new CruiseShip(750);

const shipyard = new Shipyard();

shipyard.addShip(motorBoat);
shipyard.addShip(sailboat);
shipyard.addShip(cruiseShip);

shipyard.displayShips();
