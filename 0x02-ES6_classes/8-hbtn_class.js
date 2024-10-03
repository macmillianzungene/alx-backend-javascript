class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    get size() {
        return this._size;
    }

    get location() {
        return this._location;
    }

    // Overriding the valueOf method to return the size when cast to a number
    valueOf() {
        return this._size;
    }
}

// Example usage
const holberton = new HolbertonClass(100, "San Francisco");
console.log(holberton.size); // 100
console.log(holberton.location); // "San Francisco"
console.log(Number(holberton)); // 100

