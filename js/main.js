
// // Event Listeners for clicking buttons 0 through 9

// document.querySelector(".zero").addEventListener("click", zero);
// document.querySelector(".one").addEventListener("click", one);
// document.querySelector(".two").addEventListener("click", two);
// document.querySelector(".three").addEventListener("click", three);
// document.querySelector(".four").addEventListener("click", four);
// document.querySelector(".five").addEventListener("click", five);
// document.querySelector(".six").addEventListener("click", six);
// document.querySelector(".seven").addEventListener("click", seven);
// document.querySelector(".eight").addEventListener("click", eight);
// document.querySelector(".nine").addEventListener("click", nine);


// // Event Listeners for math buttons and clear

// document.querySelector(".clear").addEventListener("click", clear);
// document.querySelector(".add").addEventListener("click", add);
// // document.querySelector(".minus").addEventListener("click", sub);


// // Variables for numbers to math
// let display = 0;
// let firstNum = 0;
// let secondNum = 0;
// let answer = 0;


// // Functions for pressing buttons 0 - 9

// function zero() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 0;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 0);
//     }    
// };

// function one() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 1;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 1);
//     }    
// };

// function two() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 2;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 2);
//     }    
// };

// function three() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 3;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 3);
//     }    
// };

// function four() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 4;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 4);
//     }    
// };

// function five() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0) {
//         display = document.querySelector('#result').innerText = 5;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 5);
//     }    
// };

// function six() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 6;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 6);
//     }    
// };

// function seven() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 7;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 7);
//     }    
// };

// function eight() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 8;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 8);
//     }    
// };

// function nine() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 9;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 9);
//     }    
// };


// // Functions for math buttons including clear

// function clear() {
//     display = document.querySelector('#result').innerText = 0;
//     firstNum = 0;
//     secondNum = 0;
//     answer = 0;
// };

// function add() {
//     firstNum = display;

//     const equal = document.querySelector('.equal')
    
//     equal.addEventListener('click', function() {
        
//         secondNum = display;
//         answer = firstNum + secondNum;

//         firstNum = 0;
//         secondNum = 0;

//         return display = Number(document.querySelector('#result').innerText = answer);
//     });
// }

// // function sub() {
// //     firstNum = display;

// //     const equal = document.querySelector('.equal')
    
// //     equal.addEventListener('click', function() {
        
// //         secondNum = display;
// //         answer = Number(firstNum - secondNum);

// //         firstNum = 0;

// //         return display = Number(document.querySelector('#result').innerText = answer);
// //     });
// // }



// // Code to use keyboard number buttons


// // // const numberDisplay = document.getElementById('result');

// // // document.addEventListener('keypress', function(event) {
// // //     const keyPressed = event.key;

// // //     if (/^\d$/.test(keyPressed)) {
// // //         numberDisplay.textContent += keyPressed;
// // //     }
// // // });

// // // function zero() {
// // //     document.querySelector("#result").innerText = 2
// // // }







//  OOP Attempt

let calculator = {
    
    display: document.querySelector('#display'),
    output: 0,
    firstNum: 0,
    secondNum: 0,
    answer: 0,

    buttons: {
        one: {
            key: document.querySelector('.one'),
            output: 
                function() {
                    calculator.toDisplay(1);
            }, 
        },

        two: {
            key: document.querySelector('.two'),
            output: 
                function() {
                    calculator.toDisplay(2);
            }, 
        },

        three: {
            key: document.querySelector('.three'),
            output: 
                function() {
                    calculator.toDisplay(3);
            }, 
        },

        addition: {
            key: document.querySelector('.add'),
            memory: 
                function() {
                    calculator.firstNum = calculator.firstNum + calculator.output;
                },
        },

        equal: {
            key: document.querySelector('.equal'),
            output: 
                function() {
                    calculator.toDisplay();
            }, 
        },
    },

     
    toDisplay: function(num) {
            if (calculator.output === 0 || calculator.firstNum !== 0 || calculator.secondNum !== 0 || calculator.answer !== 0) {
                calculator.output = Number(calculator.display.innerText = num);
            } else {
                calculator.output = Number(calculator.display.innerText += num);
            }
    },
    
    init: function() {
        calculator.buttons.one.key.addEventListener('click', calculator.buttons.one.output);
        calculator.buttons.two.key.addEventListener('click', calculator.buttons.two.output);
        calculator.buttons.three.key.addEventListener('click', calculator.buttons.three.output);
        calculator.buttons.addition.key.addEventListener('click', calculator.buttons.addition.memory);
        calculator.buttons.equal.key.addEventListener('click', calculator.buttons.equal.output);
    }
}

calculator.init();
// calculator.buttons.one.key.addEventListener('click', calculator.buttons.one.output)
// calculator.buttons.two.key.addEventListener('click', calculator.buttons.two.output)
// calculator.buttons.three.key.addEventListener('click', calculator.buttons.three.output)
// calculator.buttons.addition.key.addEventListener('click', calculator.buttons.addition.memory)
// calculator.buttons.equal.key.addEventListener('click', calculator.buttons.equal.output)



















// function one() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 1;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 1);
//     }    
// };


// document.querySelector(".zero").addEventListener("click", zero);


// function zero() {
//     if (display === 0 || firstNum !== 0 || secondNum !== 0 || answer !== 0){
//         display = document.querySelector('#result').innerText = 0;
//     }else {
//         display = Number(document.querySelector('#result').innerText += 0);
//     }    
// };