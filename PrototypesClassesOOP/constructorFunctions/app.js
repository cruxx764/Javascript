

// The new keyword does the following things:

// Creates a blank, plain JavaScript object.
// Adds a property to the new object (__proto__) that links to the constructor function's prototype object
// Note: Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).

// Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
// Returns this if the function doesn't return an object.

//constructor functions are commonly spelled with capital letters to denote they are not regular functions

// instead of ;

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${b}, ${g})`;
//     };
//
// we can declare our constructor function

function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
};
//we have made this constructor function for 'color', any time we call it with the 'new' keyword, it makes us a new object it sets the constructor to color of that object and then it set sets the value of this to that new object. 

//We can append functions/methods to the obects prototype, which can be inovked later
Color.prototype.rgb = function(){
const { r, g, b } = this;
return `rgb(${r}, ${b}, ${g})`;
}


Color.prototype.hex = function() {
    const {r,g,b} = this;
    return ('#' + ((1 << 24) + (r << 16) + + (g << 8) + b).toString(16).slice(1))
}

Color.prototype.rgba = function(a=1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

//function will now automatically create a object - not required to explicity create one like with regular constructor functions 
// invoked with the 'new' keyword 

const color1 = new Color(255,40,100);
const color2 = new Color(10,120,80);

//returns;
// Color {r: 255, g: 40, b: 100}
// b: 100
// g: 40
// r: 255

//we can also invoke the rgb method now stored in the prototype object 
color1.rgb() 
//returns:
// 'rgb(255, 100, 40)'

color2.hex()

//So this is now better or more efficient than our factory approach where we returned a new object every
// time it was called.