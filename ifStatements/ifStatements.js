const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};



function isitadwarf(species){
if (species.race === "dwarf") {
    console.log("Tis a Dwarf")
} else {
    console.log("No Drawf I've ever seen")
}}; 


console.log(isitadwarf(gimli));  