
let calculator = {
    
    result: 0,

    // make method for sum

    // make method for subtract

    // make method for multiply

    //make method for division

    //make method for equals

    //make method for individual button presses 
    zero() {
        if ( result !== 0){
        document.querySelector("#result").innerText += 0;
        }
    },

    one() {
        if(result !== 0){
            result: document.querySelector('#result').innerText += 1;
        }else {
            document.querySelector('#result').innerText += 1;
        }
    },

    two() {
        document.querySelector("#result").innerText = 2;
    },

    three() {
        document.querySelector("#result").innerText = 3;
    },


}


document.querySelector(".zero").addEventListener("click", calculator.zero);
document.querySelector(".one").addEventListener("click", calculator.one);
document.querySelector(".two").addEventListener("click", calculator.two);
document.querySelector(".three").addEventListener("click", calculator.three);

// const numberDisplay = document.getElementById('result');

// document.addEventListener('keypress', function(event) {
//     const keyPressed = event.key;

//     if (/^\d$/.test(keyPressed)) {
//         numberDisplay.textContent += keyPressed;
//     }
// });

// function zero() {
//     document.querySelector("#result").innerText = 2
// }
