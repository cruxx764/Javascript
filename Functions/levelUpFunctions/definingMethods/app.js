// Make our own math object
const myMath = {
    PI: 3.14159,
    square : function (num){
        return num * num;
    },
    cube : function(num){
        return num ** 3
    }
}

//new syntax 
const mymath2 = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const myshape = 10; 
const myShapeCubed = mymath2.cube(myshape)
console.log(myShapeCubed)