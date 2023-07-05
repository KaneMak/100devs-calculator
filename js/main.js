
// let calculator = {
    
//     display: document.querySelector('#display'),
//     output: 0,
//     firstNum: null,
//     secondNum: null,
//     operator: null,
//     answer: null, 
//     memory: null,
//     memCheck: false,
//     prevAnswer: false,

//     inputs: {

//         zero: {
//             button: document.querySelector('.zero'),
//             output: 
//                 function() {
//                     calculator.pressNumButton(0)
//                     calculator.fadeAnimation(calculator.inputs.zero.button)
//                 }
//         },

//         one: {
//             button: document.querySelector('.one'),
//             output: 
//                 function() {
//                     calculator.pressNumButton(1);
//                     calculator.fadeAnimation(calculator.inputs.one.button)

//                 },
//         },

//         two: {
//             button: document.querySelector('.two'),
//             output: 
//                 function() {
//                     calculator.pressNumButton(2);
//                     calculator.fadeAnimation(calculator.inputs.two.button)

//                 }, 
//         },

//         three: {
//             button: document.querySelector('.three'),
//             output: 
//                 function() {
//                     calculator.pressNumButton(3);
//                     calculator.fadeAnimation(calculator.inputs.three.button)

//                 }, 
//         },

//         four: {
//             button: document.querySelector('.four'),
//             output: 
//                 function() {
//                     calculator.pressNumButton(4);
//                     calculator.fadeAnimation(calculator.inputs.four.button)
//                 }, 
//         },

//         five: {
//             button: document.querySelector('.five'),
//             output: 
//                 function() {
//                     calculator.pressNumButton(5);
//                     calculator.fadeAnimation(calculator.inputs.five.button)
//                 }, 
//         },

//         six: {
//             button: document.querySelector('.six'),
//             output: 
//                 function() {
//                     calculator.pressNumButton(6);
//                     calculator.fadeAnimation(calculator.inputs.six.button)
//                 }, 
//         },

//         seven: {
//             button: document.querySelector('.seven'),
//             output: 
//                 function() {
//                     calculator.pressNumButton(7);
//                     calculator.fadeAnimation(calculator.inputs.seven.button)
//                 }, 
//         },

//         eight: {
//             button: document.querySelector('.eight'),
//             output: 
//                 function() {
//                     calculator.pressNumButton(8);
//                     calculator.fadeAnimation(calculator.inputs.eight.button)
//                 }, 
//         },

//         nine: {
//             button: document.querySelector('.nine'),
//             output: 
//                 function() {
//                     calculator.pressNumButton(9);
//                     calculator.fadeAnimation(calculator.inputs.nine.button)
//                 }, 
//         },

//         addition: {
//             button: document.querySelector('.add'),
//             memory: 
//                 function() {
//                     calculator.firstNum = calculator.output
//                     calculator.findAnswer();
//                     calculator.pressOperatorButton('+');
//                     calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.add);
//                     calculator.clearAnimation()
//                     calculator.activeAnimation(calculator.inputs.addition.button)
//                 },
//         },

//         subtract: {
//             button: document.querySelector('.subtract'),
//             memory: 
//                 function() {
//                     calculator.pressOperatorButton('-');
//                     calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.subtract);
//                     calculator.clearAnimation()
//                     calculator.activeAnimation(calculator.inputs.subtract.button)
//                 },
//         },

//         multiply: {
//             button: document.querySelector('.multiply'),
//             memory: 
//                 function() {
//                     calculator.pressOperatorButton('*');
//                     calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.multiply);
//                     calculator.clearAnimation()
//                     calculator.activeAnimation(calculator.inputs.multiply.button)
//                 },
//         },

//         divide: {
//             button: document.querySelector('.divide'),
//             memory: 
//                 function() {
//                     calculator.pressOperatorButton('/'); 
//                     calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.divide);
//                     calculator.clearAnimation()
//                     calculator.activeAnimation(calculator.inputs.divide.button)
//                 },
//         },

//         negation: {
//             button: document.querySelector('.negation'),
//             negate:
//                 function() {
//                     let str = calculator.output.toString()
//                     let operatorIndex = calculator.firstNum.lastIndexOf(Number(str[0]))
//                     console.log('lastof' + operatorIndex)
//                     calculator.output = Number(calculator.display.innerText = (calculator.output * (-1)))
//                     calculator.firstNum[operatorIndex] = calculator.firstNum[operatorIndex] * (-1)

//                     calculator.fadeAnimation(calculator.inputs.negation.button)

//                     // if( calculator.firstNum !== [] && calculator.secondNum === []){
//                     //     calculator.firstNum[0] = calculator.firstNum[0] * (-1)
//                     // }
//                     // if ( calculator.secondNum !== [] ) {
//                     //     calculator.secondNum[0] = calculator.secondNum[0] * (-1)
//                     // }
//                 }
//         },

//         decimal: {
//             button: document.querySelector('.decimal'),
//             addDecimal: 
//                 function() {
//                     calculator.pressNumButton('.')
//                     calculator.fadeAnimation(calculator.inputs.decimal.button)
//                     // let str = calculator.output.toString();
//                     // let last = str.length - 1;
//                     // let operatorIndex = calculator.firstNum.lastIndexOf(Number(str[last]))
//                     // console.log('lastof' + operatorIndex)
//                     // calculator.output = Number(calculator.display.innerText = calculator.output + '.')
//                     // // calculator.firstNum[operatorIndex] = calculator.firstNum[operatorIndex] * (-1)
//                 }
//         },

//         clear: {
//             button: document.querySelector('.clear'),
//             memory: 
//                 function() {
//                     calculator.prevAnswer = false,
//                     calculator.memCheck = false;
//                     calculator.firstNum = null;
//                     calculator.secondNum = null;
//                     calculator.output = Number(calculator.display.innerText = 0);
//                     calculator.answer = 0;
//                     calculator.memory = 0;

//                     calculator.fadeAnimation(calculator.inputs.clear.button);
//                     calculator.clearAnimation()
//                 },
//         },

//         // operatorSelector: function(operator) {
//         //     let operatorIndex = calculator.firstNum.lastIndexOf(operator);
//         //     console.log(operatorIndex)
//         //     console.log(calculator.firstNum.slice(operatorIndex))
//         //     calculator.memory = calculator.firstNum.slice(operatorIndex)
//         //     let strFirstNum = calculator.firstNum.join('');
//         //     calculator.answer = eval(strFirstNum);
//         //     calculator.output = Number(calculator.display.   innerText = calculator.answer);
//         //     calculator.firstNum = [calculator.answer].concat(calculator.memory);
//         //     calculator.output = Number(calculator.display.innerText = calculator.answer);
//         //     calculator.firstNum = [calculator.answer]
//         //     console.log(calculator.firstNum)
//         //     console.log(calculator.firstNum);
//         //     calculator.prevAnswer = true;
//         //     calculator.memCheck = false;
//         // },

//         equal: {
//             button: document.querySelector('.equal'),

//             equalAgain: function() {
//                 calculator.findAnswer();
//                 calculator.output = calculator.display.innerText = calculator.firstNum
//                 calculator.prevAnswer = true;
//                 console.log('equalAgain')
//             },
            
//             add: function() { 
//                 calculator.firstNum = calculator.firstNum + calculator.secondNum
//                 calculator.output = calculator.display.innerText = calculator.firstNum
                
                
//                 // calculator.inputs.operatorSelector('+');
//                 calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.add);
//                 calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
//             },

//             subtract: function(){
//                 calculator.inputs.operatorSelector('-');
//                 calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.subtract);
//                 calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
//             }, 

//             multiply: function(){
//                 calculator.inputs.operatorSelector('*');
//                 calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.multiply);
//                 calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
//             }, 

//             divide: function(){
//                 calculator.inputs.operatorSelector('/');
//                 calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.divide);
//                 calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
//             }, 
            
            
//         },
//     },

//     pressNumButton: function(num) {
//         if(calculator.prevAnswer){
//             calculator.firstNum = null;
//             calculator.prevAnswer = false;
//         }
//         if(calculator.operator !== null){
//             calculator.firstNum = num;
//         }else{
//             calculator.secondNum = num;
//         }
//         calculator.toDisplay(num);
//         calculator.memCheck = true;

//         document.querySelector('.add').classList.remove('activeColor')
//         document.querySelector('.subtract').classList.remove('activeColor')
//         document.querySelector('.multiply').classList.remove('activeColor')
//         document.querySelector('.divide').classList.remove('activeColor')
//     },

//     pressOperatorButton: function(operator) {

//         calculator.prevAnswer = false;
//         calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.equalAgain);
//         calculator.memCheck = false;

//         calculator.operator = operator;
//         // calculator.secondNum.push(operator);
//         console.log(calculator.firstNum)
//     },

//     findAnswer: function() {
//         if(calculator.operator === '+'){
//             calculator.firstNum = calculator.firstNum + calculator.secondNum
//         }
//     },

//     equalClear: function() {
//         calculator.output = 0;
//         calculator.firstNum = null;
//         calculator.secondNum = null;
//         calculator.memCheck = false;
//         calculator.answer = 0;
//     },

//     lengthTest: function() {
//         let lengthTest = calculator.output.toString()
//             if (lengthTest.length > 6 ) {
//                 calculator.output = 0
//                 calculator.output = calculator.display.innerText = "ERROR"
//             }
//     },

//     toDisplay: function(num) {
//         calculator.lengthTest();
//         if (calculator.memCheck === false && calculator.output !== "ERROR") {
//             calculator.output = Number(calculator.display.innerText = num);
//         } else if (calculator.memCheck !== false && calculator.output !== "ERROR") {
//             calculator.output = Number(calculator.display.innerText += num);
//         }
//     },

//     fadeAnimation: function(button) {
//         button.classList.add("fadeAnimation")
//         setTimeout(function(){button.classList.remove('fadeAnimation');}, 100)

//     },

//     activeAnimation: function(button) {
//         button.classList.add("activeColor")
//     },

//     clearAnimation: function() {
//         document.querySelector('.add').classList.remove('activeColor')
//         document.querySelector('.subtract').classList.remove('activeColor')
//         document.querySelector('.multiply').classList.remove('activeColor')
//         document.querySelector('.divide').classList.remove('activeColor')
//     },
    
//     init: function() {
//         calculator.inputs.zero.button.addEventListener('click', calculator.inputs.zero.output);
//         calculator.inputs.one.button.addEventListener('click', calculator.inputs.one.output);
//         calculator.inputs.two.button.addEventListener('click', calculator.inputs.two.output);
//         calculator.inputs.three.button.addEventListener('click', calculator.inputs.three.output);
//         calculator.inputs.four.button.addEventListener('click', calculator.inputs.four.output);
//         calculator.inputs.five.button.addEventListener('click', calculator.inputs.five.output);
//         calculator.inputs.six.button.addEventListener('click', calculator.inputs.six.output);
//         calculator.inputs.seven.button.addEventListener('click', calculator.inputs.seven.output);
//         calculator.inputs.eight.button.addEventListener('click', calculator.inputs.eight.output);
//         calculator.inputs.nine.button.addEventListener('click', calculator.inputs.nine.output);
//         calculator.inputs.addition.button.addEventListener('click', calculator.inputs.addition.memory);
//         calculator.inputs.subtract.button.addEventListener('click', calculator.inputs.subtract.memory);
//         calculator.inputs.multiply.button.addEventListener('click', calculator.inputs.multiply.memory);
//         calculator.inputs.divide.button.addEventListener('click', calculator.inputs.divide.memory);
//         calculator.inputs.negation.button.addEventListener('click', calculator.inputs.negation.negate);
//         calculator.inputs.decimal.button.addEventListener('click', calculator.inputs.decimal.addDecimal);
//         calculator.inputs.clear.button.addEventListener('click', calculator.inputs.clear.memory);
//         calculator.inputs.equal.button.addEventListener('click', calculator.clearAnimation)
//     },
// }

// calculator.init();


const calculator = {

    display: document.querySelector('#display'),
    output: 0,
    firstNum: null,
    secondNum: null,
    answer: null,
    memory: null,
    operator: null,
    memCheck: false,
    prevAnswer: false,

    inputs:{

        zero: {
            button: document.querySelector('.zero'),
            output:
                function() {
                    calculator.pressNumButton(0)
                    calculator.fadeAnimation(calculator.inputs.zero.button)
                }
        },

        one: {
            button: document.querySelector('.one'),
            output:
                function() {
                    calculator.pressNumButton(1)
                    calculator.fadeAnimation(calculator.inputs.one.button)
                }
        },

        two: {
            button: document.querySelector('.two'),
            output:
                function() {
                    calculator.pressNumButton(2)
                    calculator.fadeAnimation(calculator.inputs.two.button)
                }
        },

        three: {
            button: document.querySelector('.three'),
            output:
                function() {
                    calculator.pressNumButton(3)
                    calculator.fadeAnimation(calculator.inputs.three.button)
                }
        },

        four: {
            button: document.querySelector('.four'),
            output:
                function() {
                    calculator.pressNumButton(4)
                    calculator.fadeAnimation(calculator.inputs.four.button)
                }
        },

        five: {
            button: document.querySelector('.five'),
            output:
                function() {
                    calculator.pressNumButton(5)
                    calculator.fadeAnimation(calculator.inputs.five.button)
                }
        },

        six: {
            button: document.querySelector('.six'),
            output:
                function() {
                    calculator.pressNumButton(6)
                    calculator.fadeAnimation(calculator.inputs.six.button)
                }
        },

        seven: {
            button: document.querySelector('.seven'),
            output:
                function() {
                    calculator.pressNumButton(7)
                    calculator.fadeAnimation(calculator.inputs.seven.button)
                }
        },

        eight: {
            button: document.querySelector('.eight'),
            output:
                function() {
                    calculator.pressNumButton(8)
                    calculator.fadeAnimation(calculator.inputs.eight.button)
                }
        },

        nine: {
            button: document.querySelector('.nine'),
            output:
                function() {
                    calculator.pressNumButton(9)
                    calculator.fadeAnimation(calculator.inputs.nine.button)
                }
        },

        addition: {
            button: document.querySelector('.add'),
            memory: 
                async function() {
                    await calculator.calculate()
                    console.log(calculator.operator)
                    calculator.pressOperatorButton('+');
                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.firstEqual);
                    calculator.clearAnimation()
                    calculator.activeAnimation(calculator.inputs.addition.button)
                    calculator.testLogs()
                },
        },

        subtraction: {
            button: document.querySelector('.subtract'),
            memory: 
                async function() {
                    await calculator.calculate()
                    console.log(calculator.operator)
                    calculator.pressOperatorButton('-');
                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.firstEqual);
                    calculator.clearAnimation()
                    calculator.activeAnimation(calculator.inputs.subtraction.button)
                    calculator.testLogs()
                },
        },

        multiplication: {
            button: document.querySelector('.multiply'),
            memory: 
                async function() {
                    await calculator.calculate()
                    console.log(calculator.operator)
                    calculator.pressOperatorButton('*');
                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.firstEqual);
                    calculator.clearAnimation()
                    calculator.activeAnimation(calculator.inputs.multiplication.button)
                    calculator.testLogs()
                },
        },

        division: {
            button: document.querySelector('.divide'),
            memory: 
                async function() {
                    await calculator.calculate()
                    console.log(calculator.operator)
                    calculator.pressOperatorButton('/');
                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.firstEqual);
                    calculator.clearAnimation()
                    calculator.activeAnimation(calculator.inputs.division.button)
                    calculator.testLogs()
                },
        },

        decimal: {
            button: document.querySelector('.decimal'),
            
            memory: function() {
                calculator.memCheck = false
                let decNum = calculator.output.toString() + "."
                calculator.toDisplay(decNum)
                console.log(decNum)
                calculator.memCheck = true

            }

        },

        negation: {
            button: document.querySelector('.negation'),

            memory: function() {
                calculator.memCheck = false
                let negNum = calculator.output * (-1)
                calculator.toDisplay(negNum)
                calculator.memCheck = true
            }

        },

        clear: {
            button: document.querySelector('.clear'),
            memory: 
                function() {
                    calculator.output = 0;
                    calculator.firstNum = null;
                    calculator.secondNum = null;
                    calculator.answer = null;
                    calculator.memory = null;
                    calculator.operator = null;
                    calculator.memCheck = false;
                    calculator.prevAnswer = false,
                    calculator.toDisplay(0)
                    

                    calculator.fadeAnimation(calculator.inputs.clear.button);
                    calculator.clearAnimation()
                },
        },

        equal: {
            button: document.querySelector('.equal'),

            firstEqual: async function(){
                calculator.memory = calculator.output
                await calculator.calculate()
                calculator.prevAnswer = true;
                calculator.firstNum = null;
                calculator.secondNum = null;
                calculator.answer = null;
                calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.firstEqual);
                calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
                calculator.fadeAnimation(calculator.inputs.equal.button)

            },

            equalAgain: function() {
                switch(calculator.operator){
                    case '+':
                        calculator.output += calculator.memory
                        break;
                    case '-':
                        calculator.output -= calculator.memory
                        break;
                    case '*':
                        calculator.output *= calculator.memory
                        break;
                    case '/':
                        calculator.output /= calculator.memory
                        break;
                    default:
                        calculator.toDisplay(calculator.firstNum)
                }
                calculator.toDisplay(calculator.output)
                calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
                calculator.fadeAnimation(calculator.inputs.equal.button)

            },
        }
    },

    pressNumButton: function(num) {
        if(calculator.prevAnswer){
            calculator.firstNum = null;
            calculator.secondNum = null;
            calculator.prevAnswer = false;
        }
        
        calculator.toDisplay(num);
        calculator.memCheck = true;

        document.querySelector('.add').classList.remove('activeColor')
        document.querySelector('.subtract').classList.remove('activeColor')
        document.querySelector('.multiply').classList.remove('activeColor')
        document.querySelector('.divide').classList.remove('activeColor')
    },

    pressOperatorButton: function(operator) {

        calculator.prevAnswer = false;
        calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.equalAgain);
        calculator.memCheck = false;
        calculator.operator = operator;
    },

    assignNumbers: function() {

        calculator.memory = calculator.output

        if(calculator.firstNum === null) {
            calculator.firstNum = calculator.output
        }else if(calculator.firstNum !== null && calculator.secondNum === null){
            calculator.secondNum = calculator.output
        }else if(calculator.firstNum !== null && calculator.secondNum !== null){
            calculator.firstNum = calculator.answer
            calculator.secondNum = calculator.output
            calculator.memory = calculator.secondNum
        }
    },

    calculate: async function() {
        if(calculator.firstNum === null) {
            calculator.firstNum = calculator.output
        }else if(calculator.firstNum !== null && calculator.secondNum === null){
            calculator.secondNum = calculator.output
        }else if(calculator.firstNum !== null && calculator.secondNum !== null){
            calculator.firstNum = calculator.answer
            calculator.secondNum = calculator.output
        }
        switch(calculator.operator){
            case '+':
                calculator.answer = calculator.firstNum + calculator.secondNum;
                break;
            case '-':
                calculator.answer = calculator.firstNum - calculator.secondNum;
                break;
            case '*':
                if(calculator.prevAnswer){
                    calculator.answer = calculator.output
                }else{
                    calculator.answer = calculator.firstNum * calculator.secondNum;
                    if(!Number.isInteger(calculator.answer)){
                        calculator.answer = parseFloat(calculator.answer.toFixed(2))
                    }
                }
                break;
            case '/':
                if(calculator.prevAnswer){
                    calculator.answer = calculator.output
                }else{
                    calculator.answer = calculator.firstNum / calculator.secondNum;
                    if(!Number.isInteger(calculator.answer)){
                        calculator.answer = parseFloat(calculator.answer.toFixed(2))
                    }
                }
                break;
        }

        calculator.memCheck = false
        
        if(calculator.answer === null){
            calculator.toDisplay(calculator.firstNum)
        }else{
            calculator.toDisplay(calculator.answer)
        }
    

    },

    lengthTest: function(num) {
        let lengthTest = num.toString()
        if (lengthTest.length > 6 ) {
            calculator.output = 0
            calculator.output = calculator.display.innerText = "ERROR"
        }
        
    },

    toDisplay: function(num) {
            calculator.lengthTest()
            let lengthTest = num.toString()
            console.log(lengthTest.length)
            if (lengthTest.length > 6 ) {
                calculator.output = 0
                calculator.output = calculator.display.innerText = "ERROR"
            }
            if (calculator.memCheck === false && calculator.output !== "ERROR") {
                calculator.output = Number(calculator.display.innerText = num);
            } else if (calculator.memCheck !== false && calculator.output !== "ERROR") {
                calculator.output = Number(calculator.display.innerText += num);
            }
    },

    lengthTest: function() {
        let lengthTest = calculator.output.toString()
            if (lengthTest.length > 6 ) {
                calculator.output = 0
                calculator.output = calculator.display.innerText = "ERROR"
            }
    },

    fadeAnimation: function(button) {
        button.classList.add("fadeAnimation")
        setTimeout(function(){button.classList.remove('fadeAnimation');}, 100)

    },

    activeAnimation: function(button) {
        button.classList.add("activeColor")
    },

    clearAnimation: function() {
        document.querySelector('.add').classList.remove('activeColor')
        document.querySelector('.subtract').classList.remove('activeColor')
        document.querySelector('.multiply').classList.remove('activeColor')
        document.querySelector('.divide').classList.remove('activeColor')
    },

    testLogs: function(){
        console.log("firstNum is " + calculator.firstNum)
        console.log("secondNum is " + calculator.secondNum)
        console.log("answer is " + calculator.answer)
        console.log("memory is " + calculator.memory)
        console.log("operator is " + calculator.operator)
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
        calculator.inputs.subtraction.button.addEventListener('click', calculator.inputs.subtraction.memory);
        calculator.inputs.multiplication.button.addEventListener('click', calculator.inputs.multiplication.memory);
        calculator.inputs.division.button.addEventListener('click', calculator.inputs.division.memory);
        calculator.inputs.decimal.button.addEventListener('click', calculator.inputs.decimal.memory);
        calculator.inputs.negation.button.addEventListener('click', calculator.inputs.negation.memory);
        calculator.inputs.clear.button.addEventListener('click', calculator.inputs.clear.memory);
    },
}

calculator.init();