
//Second function
function cutFruits(fruit) {
    return fruit * 4;
}

//First fucntion 
function juiceMachine(apple, orange) {
    const applePiees = cutFruits(apple);
    const orangePiees = cutFruits(orange);
    const juice = `Juice with ${applePiees} piece of apples and ${orangePiees} of oranges`
    return juice;
}
console.log(juiceMachine(3, 5));