function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${b}, ${g})`;
}


hex(255, 100, 25)
rgb(255, 100, 25);
// '#ff6419'



// Example of a factory function, we are creating a function which performs a task, so that we can utilize it later
// This is easier and more productive than having to manually convert a color code later on. 
// HOWEVER - this pattern is not commonly used: 
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${b}, ${g})`;
    };
    color.hex = function () {
        return (
            '#' + ((1 << 24) + (r << 16) + + (g << 8) + b).toString(16).slice(1)
        );
    };
    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex();


