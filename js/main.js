document.querySelector(".clear").addEventListener("click", clear);
document.querySelector(".zero").addEventListener("click", zero);
document.querySelector(".one").addEventListener("click", one);
document.querySelector(".two").addEventListener("click", two);
document.querySelector(".three").addEventListener("click", three);

let result = 0;

function clear() {
    result = document.querySelector('#result').innerText = 0;
};
 
function zero() {
    if(result !== 0){
        result = document.querySelector('#result').innerText += 0
    }else {
    result = document.querySelector('#result').innerText = 0;
    }
};

function one() {
    if (result === 0){
        result = document.querySelector('#result').innerText = 1
    }else {
        result = document.querySelector('#result').innerText += 1;
    }    
};

function two() {
    result = document.querySelector("#result").innerText = 2;
};

function three() {
    result = document.querySelector("#result").innerText = 3;
};



// let calculator = {
    
//     result: 0,

//     // make method for sum

//     // make method for subtract

//     // make method for multiply

//     //make method for division

//     //make method for equals

//     //make method for individual button presses 

//     clear() {
//         document.querySelector('#result').innerText = 0;
//     },
     
//     zero() {
//         document.querySelector('#result').innerText = 0;
        
//     },

//     one() {
//         document.querySelector('#result').innerText = 1;
//     },

//     two() {
//         document.querySelector("#result").innerText = 2;
//     },

//     three() {
//         document.querySelector("#result").innerText = 3;
//     },


// }


// document.querySelector(".clear").addEventListener("click", calculator.clear);
// document.querySelector(".zero").addEventListener("click", calculator.zero);
// document.querySelector(".one").addEventListener("click", calculator.one);
// document.querySelector(".two").addEventListener("click", calculator.two);
// document.querySelector(".three").addEventListener("click", calculator.three);

// // const numberDisplay = document.getElementById('result');

// // document.addEventListener('keypress', function(event) {
// //     const keyPressed = event.key;

// //     if (/^\d$/.test(keyPressed)) {
// //         numberDisplay.textContent += keyPressed;
// //     }
// // });

// // function zero() {
// //     document.querySelector("#result").innerText = 2
// // }
