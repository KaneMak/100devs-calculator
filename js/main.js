
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
    firstNum: [],
    secondNum: [],
    answer: 0, 
    memory: 0,
    memCheck: false,
    prevAnswer: false,

    pressNumButton: function(num) {
        if(calculator.prevAnswer){
            calculator.equalClear();
        }
        calculator.firstNum.push(num);
        calculator.toDisplay(num);
        calculator.memCheck = true;
                        
    },

    resetCalculator: function() {
        calculator.firstNum = [];
        calculator.secondNum = [];
        calculator.answer = 0;
        calculator.memory = 0;
        calculator.prevAnswer = false;
    },

    equalClear: function() {
        calculator.resetCalculator();
        calculator.output = 0;
    },

    lengthTest: function() {
        let lengthTest = calculator.output.toString()
            if (lengthTest.length > 6 ) {
                calculator.output = 0
                calculator.output = calculator.display.innerText = "ERROR"
            }
    },

    inputs: {

        zero: {
            button: document.querySelector('.zero'),
            output: 
                function() {
                    calculator.pressNumButton(0)
                }
        },

        one: {
            button: document.querySelector('.one'),
            output: 
                function() {
                    calculator.pressNumButton(1);
                },
        },

        two: {
            button: document.querySelector('.two'),
            output: 
                function() {
                    calculator.pressNumButton(2);
            }, 
        },

        three: {
            button: document.querySelector('.three'),
            output: 
                function() {
                    calculator.pressNumButton(3);
            }, 
        },

        four: {
            button: document.querySelector('.four'),
            output: 
                function() {
                    calculator.pressNumButton(4);
            }, 
        },

        five: {
            button: document.querySelector('.five'),
            output: 
                function() {
                    calculator.pressNumButton(5);
            }, 
        },

        six: {
            button: document.querySelector('.six'),
            output: 
                function() {
                    calculator.pressNumButton(6);
            }, 
        },

        seven: {
            button: document.querySelector('.seven'),
            output: 
                function() {
                    calculator.pressNumButton(7);
            }, 
        },

        eight: {
            button: document.querySelector('.eight'),
            output: 
                function() {
                    calculator.pressNumButton(8);
            }, 
        },

        nine: {
            button: document.querySelector('.nine'),
            output: 
                function() {
                    calculator.pressNumButton(9);
            }, 
        },

        addition: {
            button: document.querySelector('.add'),
            memory: 
                function() {
                    if(calculator.prevAnswer){
                        calculator.firstNum.push(calculator.output);
                    }
                    calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.equalAgain);
                    calculator.memCheck = false;
                    
                    calculator.firstNum.push('+');
                    calculator.secondNum.push('+');
                    console.log(calculator.firstNum)
                    
                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.add);
                    
                },
        },

        subtract: {
            button: document.querySelector('.subtract'),
            memory: 
                function() {
                    calculator.memCheck = false;
                    calculator.firstNum = calculator.output;

                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.subtract);
                },
        },

        multiply: {
            button: document.querySelector('.multiply'),
            memory: 
                function() {
                    calculator.memCheck = false;
                    calculator.firstNum = calculator.output;

                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.multiply);
                },
        },

        divide: {
            button: document.querySelector('.divide'),
            memory: 
                function() {
                    calculator.memCheck = false;
                    calculator.firstNum = calculator.output;

                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.divide);
                },
        },

        clear: {
            button: document.querySelector('.clear'),
            memory: 
                function() {
                    equalClear();
                },
        },

        equal: {
            button: document.querySelector('.equal'),

            equalAgain: function() {
                            calculator.secondNum = calculator.firstNum;
                            calculator.secondNum = [calculator.answer].concat(calculator.memory);
                            let strSecondNum = calculator.secondNum.join('');
                            calculator.answer = eval(strSecondNum);
                            calculator.output = Number(calculator.display.innerText = calculator.answer);
                            // calculator.equalClear();
                            calculator.firstNum = [];
                            calculator.prevAnswer = true;
                            console.log('equalAgain')
            },
            
            add: function() { 

                    
                    let addIndex = calculator.firstNum.lastIndexOf('+');
                    console.log(addIndex)
                    console.log(calculator.firstNum.slice(addIndex))
                    calculator.memory = calculator.firstNum.slice(addIndex)

                    let strFirstNum = calculator.firstNum.join('');
                    calculator.answer = eval(strFirstNum);
                    calculator.output = Number(calculator.display.innerText = calculator.answer);
                    calculator.firstNum = [calculator.answer]
                    // calculator.secondNum = [0];
                    console.log(calculator.firstNum);

                    
                    // calculator.lengthTest();
                    // calculator.output = Number(calculator.display.   innerText = calculator.answer);
                    // calculator.equalClear();
                    calculator.prevAnswer = true;
                    calculator.memCheck = false;
                    console.log("add")

                    calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.add);
                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
            },

            subtract: function(){
                        calculator.secondNum = calculator.output;
                        calculator.answer = calculator.firstNum - calculator.secondNum;
                        calculator.output = calculator.display.innerText = calculator.answer;
                        calculator.firstNum = 0;
                        calculator.secondNum = 0;
                        calculator.memCheck = false;
            }, 

            multiply: function(){
                        calculator.secondNum = calculator.output;
                        calculator.answer = calculator.firstNum * calculator.secondNum;
                        calculator.output = calculator.display.innerText = calculator.answer;
                        calculator.firstNum = 0;
                        calculator.secondNum = 0;
                        calculator.memCheck = false;
            }, 

            divide: function(){
                        calculator.secondNum = calculator.output;
                        calculator.answer = calculator.firstNum / calculator.secondNum;
                        calculator.output = calculator.display.innerText = calculator.answer;
                        calculator.firstNum = 0;
                        calculator.secondNum = 0;
                        calculator.memCheck = false;
            }, 
            
            
        },
    },

    toDisplay: function(num) {
            calculator.lengthTest();
            // let lengthTest = calculator.output.toString()
            
            // if (lengthTest.length > 6 ) {
            //     calculator.output = calculator.display.innerText = "ERROR"
            // }
            if (calculator.memCheck === false && calculator.output !== "ERROR") {
                calculator.output = Number(calculator.display.innerText = num);
            } else if (calculator.memCheck !== false && calculator.output !== "ERROR") {
                calculator.output = Number(calculator.display.innerText += num);
            }
    },
    
    init: function() {
        calculator.inputs.zero.button.addEventListener('click', calculator.inputs.zero.output);
        calculator.inputs.one.button.addEventListener('click', calculator.inputs.one.output);
        calculator.inputs.two.button.addEventListener('click', calculator.inputs.two.output);
        calculator.inputs.three.button.addEventListener('click', calculator.inputs.three.output);
        calculator.inputs.four.button.addEventListener('click', calculator.inputs.four.output);
        calculator.inputs.five.button.addEventListener('click', calculator.inputs.five.output);
        calculator.inputs.six.button.addEventListener('click', calculator.inputs.six.output);
        calculator.inputs.seven.button.addEventListener('click', calculator.inputs.seven.output);
        calculator.inputs.eight.button.addEventListener('click', calculator.inputs.eight.output);
        calculator.inputs.nine.button.addEventListener('click', calculator.inputs.nine.output);
        calculator.inputs.addition.button.addEventListener('click', calculator.inputs.addition.memory);
        calculator.inputs.subtract.button.addEventListener('click', calculator.inputs.subtract.memory);
        calculator.inputs.multiply.button.addEventListener('click', calculator.inputs.multiply.memory);
        calculator.inputs.divide.button.addEventListener('click', calculator.inputs.divide.memory);
        calculator.inputs.clear.button.addEventListener('click', calculator.inputs.clear.memory);
    },
}

calculator.init();




















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