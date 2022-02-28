/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

class Backpack {
    constructor(colour, shape) {
        this.colour = colour;
        this.shape = shape;
    }
}

class Shape {
    constructor(shapeName) {
        this.name = shapeName;
    }
}

const myBackpack = new Backpack("black", new Shape("cuboid"));

console.log(myBackpack);