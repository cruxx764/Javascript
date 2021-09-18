const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    ring: "one",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

const frodo = { 
    name: "Frodo",
    race: "hobbit",
    weapon: "sword",
    ring: "one",
};


function isitadwarf(species){
if (species.race === "dwarf") {
    console.log("Tis a Dwarf")
} else {
    console.log("No Drawf I've ever seen")
}}; 


// console.log(isitadwarf(gimli));  

// Is Key of 'ring' in both objects?
function anymatches(checkMatch1,checkMatch2){
    if (checkMatch1.hasOwnProperty("ring") && checkMatch2.hasOwnProperty("ring")){
        console.log("Ring holder")
    } else {
        console.log("No Ring on here")
    }
};

const data = {}

function anymatches(checkMatch1,checkMatch2){
    if ( "ring" in checkMatch1 && "ring" in checkMatch2){
        data.otherRingHolder = checkMatch2.name;
    } else {
        console.log("No Ring on here")
    }
};


console.log(anymatches(gimli,frodo));
console.log(data.otherRingHolder);


