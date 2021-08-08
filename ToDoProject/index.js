let input = prompt("What would you like to do?");
const ToDos = ['Chicken', 'Eggs', 'Milk'];
while(input !== 'Quit' && input !== 'q'){
    if(input === 'list'){
        console.log("*********************")
        for(let i = 0; i<ToDos.length; ++i){
            console.log(`${i}: ${ToDos[i]}`)
        }
        console.log("*********************")
    }else if(input === 'new'){
        const newToDo = prompt("Ok, what would you like to do?");
        ToDos.push(newToDo);
        console.log(`${newToDo} added to the list!`);
    }else if(input === 'delete'){
        const index = parseInt (prompt("Enter an index to delete"));
        if(!Number.isNaN(index)){
        const deleted =  ToDos.splice(index,1);
        console.log(`Ok, deleted ${deleted[0]}`); 
    }else {
        console.log("Unknown Index")
    }
} 
    input = prompt("What would you like to do?")
}
console.log("Ok Quit the app!")

