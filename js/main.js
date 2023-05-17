
let calculator = {
    
    result: 0,

    // make method for sum

    // make method for subtract

    // make method for multiply

    //make method for division

    //make method for equals

    //make method for individual button presses 
    zero() {
        document.querySelector("#result").innerText = 0;
    },

    one() {
        document.querySelector("#result").innerText = 1;
    },

    two() {
        document.querySelector("#result").innerText = 2;
    },

    three() {
        document.querySelector("#result").innerText = 3;
    },


}

document.querySelector(".zero").addEventListener("click", calculator.zero)
document.querySelector(".one").addEventListener("click", calculator.one)
document.querySelector(".two").addEventListener("click", calculator.two)
document.querySelector(".three").addEventListener("click", calculator.three)

// function zero() {
//     document.querySelector("#result").innerText = 2
// }
