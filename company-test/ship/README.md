# Shipyard Management System

## Problem

Create a simple ship management system using **Object-Oriented Programming (OOP)** concepts in JavaScript.

There are three types of ships:

- Motor Boat
- Sailboat
- Cruise Ship

All ship types inherit from a base class called `Ship`.

---

## Base Class

Create a class called `Ship`.

### Properties

- `type`
- `fuelTank`

---

## Ship Types

### 1. MotorBoat

Create a class called `MotorBoat` that extends `Ship`.

#### Constructor

```javascript
new MotorBoat(fuelTank, color);
```

Additional property:

- `color`

Implement the following method:

```javascript
replaceFuelTank(newCapacity);
```

This method updates the ship's fuel tank capacity.

---

### 2. Sailboat

Create a class called `Sailboat` that extends `Ship`.

#### Constructor

```javascript
new Sailboat(fuelTank);
```

---

### 3. CruiseShip

Create a class called `CruiseShip` that extends `Ship`.

#### Constructor

```javascript
new CruiseShip(fuelTank);
```

---

## Shipyard

Create a class called `Shipyard`.

### Properties

- `ships`

The property should store all ships in an array.

---

## Required Methods

### 1. Add Ship

Implement:

```javascript
addShip(ship);
```

Add a ship object into the shipyard.

---

### 2. Display Ships

Implement:

```javascript
displayShips();
```

Display all ships stored in the shipyard.

---

## Example Usage

```javascript
const motorBoat = new MotorBoat(1000, "Blue");
const sailboat = new Sailboat(500);
const cruiseShip = new CruiseShip(750);

const shipyard = new Shipyard();

shipyard.addShip(motorBoat);
shipyard.addShip(sailboat);
shipyard.addShip(cruiseShip);

shipyard.displayShips();
```

---

## Expected Output

```javascript
[
  MotorBoat {
    type: "Motor Boat",
    fuelTank: 1000,
    color: "Blue"
  },
  Sailboat {
    type: "Sailboat",
    fuelTank: 500
  },
  CruiseShip {
    type: "Cruise Ship",
    fuelTank: 750
  }
]
```

---

## Constraints

- Every ship must inherit from the `Ship` class.
- The `type` property should be assigned automatically using `super()`.
- `displayShips()` should display all ship objects currently stored in the shipyard.

---

## Bonus Challenges

### 1. Remove Ship

Implement:

```javascript
removeShip(type);
```

Remove all ships with the specified type.

Example:

```javascript
shipyard.removeShip("Motor Boat");
```

---

### 2. Find Ship

Implement:

```javascript
findShip(type);
```

Return the first ship with the specified type.

Example:

```javascript
shipyard.findShip("Cruise Ship");
```

Output:

```javascript
CruiseShip {
  type: "Cruise Ship",
  fuelTank: 750
}
```

---

### 3. Count Ships

Implement:

```javascript
countShips();
```

Return the total number of ships stored in the shipyard.

Example:

```javascript
shipyard.countShips(); // 3
```

---

### 4. Replace Fuel Tank

Use the existing method:

```javascript
replaceFuelTank(newCapacity);
```

Example:

```javascript
motorBoat.replaceFuelTank(1500);
```

Result:

```javascript
MotorBoat {
  type: "Motor Boat",
  fuelTank: 1500,
  color: "Blue"
}
```

---

## Difficulty

**Easy – Intermediate**

## Topics Covered

- JavaScript Classes
- Constructors
- Inheritance (`extends`)
- `super()`
- Object Composition
- Arrays
- Object-Oriented Programming (OOP)
