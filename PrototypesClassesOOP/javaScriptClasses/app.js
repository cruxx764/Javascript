

// ***********************************
// Constructor Function/ 'New Keyword
// ************************************
// function Color(r,g,b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// };

// Color.prototype.rgb = function(){
// const { r, g, b } = this;
// return `rgb(${r}, ${b}, ${g})`;
// }

// Color.prototype.hex = function() {
//     const {r,g,b} = this;
//     return ('#' + ((1 << 24) + (r << 16) + + (g << 8) + b).toString(16).slice(1))
// }

// Color.prototype.rgba = function(a=1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// const color1 = new Color(255,40,100);
// const color2 = new Color(10,120,80);

// ***********************************
// 'Class' Alternative 
// ************************************

// Again uses a captilized letter to indicate a 'class' or 'constructor' function 
class Color {
    // constructor is a function that will execute immediately whenever a new color is created
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const {r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
        //calls method delcared within the same construcor function 
        //rgb() is now on the prototype, it does not need to be delcared outside of the object like with the previous 'Consturctor function' example
    }
    rgba(a=1.0){
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return ('#' + ((1 << 24) + (r << 16) + + (g << 8) + b).toString(16).slice(1))
    }
};

// If we create a new color, we have to use the same syntax with the 'new' keyword;
const red = new Color(255, 67, 89, 'tomatoe')
const white = new Color(255, 255, 255, 'white')
// the constructor will auto run as long as its called 'constructor'


red.rgb();
// returns
'rgb(255, 89, 67)'

white.hex()
// returns;
'#ffffff'
