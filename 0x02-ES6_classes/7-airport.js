class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    get name() {
        return this._name;
    }

    get code() {
        return this._code;
    }

    toString() {
        return this._code;
    }
}

// Example usage
const jfk = new Airport("John F. Kennedy International Airport", "JFK");
console.log(jfk.name); // "John F. Kennedy International Airport"
console.log(jfk.code); // "JFK"
console.log(jfk.toString()); // "JFK"
