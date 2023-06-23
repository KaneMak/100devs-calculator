
let calculator = {
    
    display: document.querySelector('#display'),
    output: 0,
    firstNum: [],
    secondNum: [],
    answer: null, 
    memory: null,
    memCheck: false,
    prevAnswer: false,

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
                    calculator.pressOperatorButton('+');
                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.add);
                    
                },
        },

        subtract: {
            button: document.querySelector('.subtract'),
            memory: 
                function() {
                    calculator.pressOperatorButton('-');
                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.subtract);
                },
        },

        multiply: {
            button: document.querySelector('.multiply'),
            memory: 
                function() {
                    calculator.pressOperatorButton('*');
                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.multiply);
                },
        },

        divide: {
            button: document.querySelector('.divide'),
            memory: 
                function() {
                    calculator.pressOperatorButton('/'); 
                    calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.divide);
                },
        },

        negation: {
            button: document.querySelector('.negation'),
            negate:
                function() {
                    let str = calculator.output.toString()
                    let operatorIndex = calculator.firstNum.lastIndexOf(Number(str[0]))
                    console.log('lastof' + operatorIndex)
                    calculator.output = Number(calculator.display.innerText = (calculator.output * (-1)))
                    calculator.firstNum[operatorIndex] = calculator.firstNum[operatorIndex] * (-1)
                    // if( calculator.firstNum !== [] && calculator.secondNum === []){
                    //     calculator.firstNum[0] = calculator.firstNum[0] * (-1)
                    // }
                    // if ( calculator.secondNum !== [] ) {
                    //     calculator.secondNum[0] = calculator.secondNum[0] * (-1)
                    // }
                }
        },

        decimal: {
            button: document.querySelector('.decimal'),
            addDecimal: 
                function() {
                    calculator.pressNumButton('.')
                    // let str = calculator.output.toString();
                    // let last = str.length - 1;
                    // let operatorIndex = calculator.firstNum.lastIndexOf(Number(str[last]))
                    // console.log('lastof' + operatorIndex)
                    // calculator.output = Number(calculator.display.innerText = calculator.output + '.')
                    // // calculator.firstNum[operatorIndex] = calculator.firstNum[operatorIndex] * (-1)
                }
        },

        clear: {
            button: document.querySelector('.clear'),
            memory: 
                function() {
                    calculator.prevAnswer = false,
                    calculator.memCheck = false;
                    calculator.firstNum = [];
                    calculator.secondNum = [];
                    calculator.output = Number(calculator.display.innerText = 0);
                    calculator.answer = 0;
                    calculator.memory = 0;
                },
        },

        operatorSelector: function(operator) {
            let operatorIndex = calculator.firstNum.lastIndexOf(operator);
            console.log(operatorIndex)
            console.log(calculator.firstNum.slice(operatorIndex))
            calculator.memory = calculator.firstNum.slice(operatorIndex)
            let strFirstNum = calculator.firstNum.join('');
            calculator.answer = eval(strFirstNum);
            calculator.output = Number(calculator.display.   innerText = calculator.answer);
            calculator.firstNum = [calculator.answer].concat(calculator.memory);
            calculator.output = Number(calculator.display.innerText = calculator.answer);
            calculator.firstNum = [calculator.answer]
            console.log(calculator.firstNum)
            console.log(calculator.firstNum);
            calculator.prevAnswer = true;
            calculator.memCheck = false;
        },

        equal: {
            button: document.querySelector('.equal'),

            equalAgain: function() {
                calculator.secondNum = calculator.firstNum;
                calculator.secondNum = [calculator.answer].concat(calculator.memory);
                let strSecondNum = calculator.secondNum.join('');
                calculator.answer = eval(strSecondNum);
                calculator.output = Number(calculator.display.innerText = calculator.answer);
                calculator.firstNum = [calculator.output];
                calculator.prevAnswer = true;
                console.log('equalAgain')
            },
            
            add: function() { 
                calculator.inputs.operatorSelector('+');
                calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.add);
                calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
            },

            subtract: function(){
                calculator.inputs.operatorSelector('-');
                calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.subtract);
                calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
            }, 

            multiply: function(){
                calculator.inputs.operatorSelector('*');
                calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.multiply);
                calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
            }, 

            divide: function(){
                calculator.inputs.operatorSelector('/');
                calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.divide);
                calculator.inputs.equal.button.addEventListener('click', calculator.inputs.equal.equalAgain);
            }, 
            
            
        },
    },

    pressNumButton: function(num) {
        if(calculator.prevAnswer){
            calculator.firstNum = [];
            calculator.prevAnswer = false;
        }
        calculator.firstNum.push(num);
        calculator.toDisplay(num);
        calculator.memCheck = true;
    },

    pressOperatorButton: function(operator) {

        calculator.prevAnswer = false;
        calculator.inputs.equal.button.removeEventListener('click', calculator.inputs.equal.equalAgain);
        calculator.memCheck = false;

        calculator.firstNum.push(operator);
        calculator.secondNum.push(operator);
        console.log(calculator.firstNum)
    },

    equalClear: function() {
        calculator.output = 0;
        calculator.firstNum = [];
        calculator.secondNum = [];
        calculator.memCheck = false;
        calculator.answer = 0;
    },

    lengthTest: function() {
        let lengthTest = calculator.output.toString()
            if (lengthTest.length > 6 ) {
                calculator.output = 0
                calculator.output = calculator.display.innerText = "ERROR"
            }
    },

    toDisplay: function(num) {
        calculator.lengthTest();
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
        calculator.inputs.negation.button.addEventListener('click', calculator.inputs.negation.negate);
        calculator.inputs.decimal.button.addEventListener('click', calculator.inputs.decimal.addDecimal);
        calculator.inputs.clear.button.addEventListener('click', calculator.inputs.clear.memory);
    },
}

calculator.init();