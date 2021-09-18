
// Create new string method from the proto object
String.prototype.yell = function() {
    return `OMG!!!!!!${this.toUpperCase()}!!!!!!`
};


// replace an existing one, like the Array method .pop 
Array.prototype.pop = function() {
    return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
}