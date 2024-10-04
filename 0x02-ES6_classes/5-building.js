class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    return 'Evacuate the building immediately!';
  }
}

class OfficeBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate the building immediately! This building has ${this._floors} floors.`;
  }
}

export default OfficeBuilding;
