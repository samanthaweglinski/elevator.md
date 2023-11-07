// Elevator object constructor
function Elevator() {
  this.currentFloor = 1;
  this.direction = 'idle'; // 'up', 'down', or 'idle'
  this.destinations = [];
}

// Function to handle a button press
Elevator.prototype.buttonPress = function(requestedFloor) {
  if (this.direction === 'idle') {
    // Elevator is idle, go directly to requested floor
    this.direction = requestedFloor > this.currentFloor ? 'up' : 'down';
  }
  this.destinations.push(requestedFloor);
  this.destinations.sort((a, b) => a - b); // Sort the destinations
  this.move();
};

// Function to move the elevator
Elevator.prototype.move = function() {
  if (this.destinations.length === 0) {
    this.direction = 'idle';
    console.log('Elevator is idle.');
    return;
  }

  const nextFloor = this.destinations[0];
  if (nextFloor > this.currentFloor) {
    this.direction = 'up';
    this.currentFloor++;
  } else if (nextFloor < this.currentFloor) {
    this.direction = 'down';
    this.currentFloor--;
  }

  console.log(`Elevator is at floor ${this.currentFloor}, heading ${this.direction}.`);
  if (this.currentFloor === nextFloor) {
    console.log('Elevator arrived at floor ' + nextFloor);
    this.destinations.shift(); // Remove the reached floor from the destinations
    this.move();
  } else {
    setTimeout(() => this.move(), 1000); // Simulate elevator movement (adjust as needed)
  }
};

// Initialize two elevators
const elevator1 = new Elevator();
const elevator2 = new Elevator();

// Example usage:
elevator1.buttonPress(3); // Passenger on floor 3 presses the button
elevator2.buttonPress(2); // Passenger on floor 2 presses the button

// You can continue simulating elevator button presses as needed.
