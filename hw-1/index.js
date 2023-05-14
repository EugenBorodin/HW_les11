class Plant {
    constructor(height, age) {
        this.height = height;
        this.age =age;
    }
    get height() {
        return this.height
    }

    set height(value) {
this.height = value;
    }

    get age() {
       return this.age;
    }

    set age(value) {
        return this.age
    }

    grow() {
        this.height += 10;
    }
}