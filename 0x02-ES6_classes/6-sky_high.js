// 6-sky_high_building.js
import Building from './5-building.js';

class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors;
    }

    get floors() {
        return this._floors;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors.`;
    }
}

// Example usage
const skyHigh = new SkyHighBuilding(10000, 50);
console.log(skyHigh.sqft); // 10000
console.log(skyHigh.floors); // 50
console.log(skyHigh.evacuationWarningMessage()); // "Evacuate slowly the 50 floors."

