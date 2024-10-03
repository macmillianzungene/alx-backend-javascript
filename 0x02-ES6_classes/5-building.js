class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error("Cannot instantiate abstract class Building directly");
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    // Abstract method
    evacuationWarningMessage() {
        throw new Error("Class extending Building must override evacuationWarningMessage");
    }
}

// Example of a subclass
class OfficeBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors;
    }

    get floors() {
        return this._floors;
    }

    evacuationWarningMessage() {
        return "Please evacuate the office building immediately!";
    }
}

// Example usage
try {
    const office = new OfficeBuilding(5000, 10);
    console.log(office.sqft); // 5000
    console.log(office.floors); // 10
    console.log(office.evacuationWarningMessage()); // "Please evacuate the office building immediately!"
} catch (error) {
    console.error(error.message);
}

