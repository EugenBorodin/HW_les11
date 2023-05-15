class Plant {
    #height;
    #age;
    constructor(height, age) {
        this.#height = height;
        this.#age = age;
    }
    get height() {
        return this.#height
    }

    set height(value) {
        this.#height = value;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        this.#age = value;
    }

    grow() {
        this.#height += 10;
    }
}

class Rose extends Plant {
    #numberOfFlowers;
    constructor(height, age, numberOfFlowers) {
        super(height, age);
        this.#numberOfFlowers = numberOfFlowers;
    }

    get numberOfFlowers() {
        return this.#numberOfFlowers;
    }

    set numberOfFlowers(value) {
        this.#numberOfFlowers = value;
    }
}

const myRose = new Rose(20, 3, 5);
console.log(myRose.height);
myRose.grow();
console.log(myRose.height);
console.log(myRose.numberOfFlowers);