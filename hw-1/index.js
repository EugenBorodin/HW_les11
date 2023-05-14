class Plant {
    constructor(height, age) {
        this._height = height;
        this._age = age;
    }
    get height() {
        return this._height
    }

    set height(value) {
        this._height = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    grow() {
        this._height += 10;
    }
}

class Rose extends Plant {
    constructor(height, age, numberOfFlowers) {
        super(height, age);
        this._numberOfFlowers = numberOfFlowers;
    }

    get numberOfFlowers() {
        return this._numberOfFlowers;
    }

    set numberOfFlowers(value) {
        this._numberOfFlowers = value;
    }
}

const myRose = new Rose(20, 3, 5);
console.log(myRose.height);
myRose.grow();
console.log(myRose.height);
console.log(myRose.numberOfFlowers);