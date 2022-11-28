//Challenge 1: Student Grade Generator (Toy Problem)
const cc = require('prompt-sync');
const prompt = cc();
//generator function that uses else-if statements to determine grades
function generator(){
    //Ask user for input
    
    let grade = prompt('Enter your marks:');
    if(grade <= 100 && grade > 79) {
        console.log("A");
    }
    else if(grade <= 79 && grade > 59){
        console.log("B");
    }
    else if(grade <= 59 && grade > 49){
        console.log("C");
    }
    else if(grade <= 49 && grade > 39){
        console.log("D")
    }
    else if(grade <= 39 && grade >= 0){
        console.log("E")
    }
    else{
        console.log("Not valid")
    }
    
}
//call the generator function
generator();