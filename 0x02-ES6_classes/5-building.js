class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly.');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Example of a subclass that extends Building
class OfficeBuilding extends Building {
  evacuationWarningMessage() {
    return 'Evacuate the office building immediately!';
  }
}

// Usage
const office = new OfficeBuilding(5000);
console.log(office.sqft); // 5000
console.log(office.evacuationWarningMessage()); // "Evacuate the office building immediately!"
