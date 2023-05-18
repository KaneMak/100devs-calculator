document.querySelector(".clear").addEventListener("click", clear);
document.querySelector(".zero").addEventListener("click", zero);
document.querySelector(".one").addEventListener("click", one);
document.querySelector(".two").addEventListener("click", two);
document.querySelector(".three").addEventListener("click", three);
document.querySelector(".four").addEventListener("click", four);
document.querySelector(".five").addEventListener("click", five);
document.querySelector(".six").addEventListener("click", six);
document.querySelector(".seven").addEventListener("click", seven);
document.querySelector(".eight").addEventListener("click", eight);
document.querySelector(".nine").addEventListener("click", nine);

document.querySelector(".add").addEventListener("click", add);
// document.querySelector(".equal").addEventListener("click", equal);

let display = 0;
let firstNum = 0;
let secondNum = 0;
let answer = 0;

function clear() {
    display = document.querySelector('#result').innerText = 0;
    firstNum = 0;
    secondNum = 0;
    answer = 0;
};
 
function zero() {
    if(display !== 0){
        display = Number(document.querySelector('#result').innerHTML += 0);
    }else {
        display = document.querySelector('#result').innerText = 0;
    }
};

function one() {
    if (display === 0 || firstNum !== 0 || answer !== 0){
        display = document.querySelector('#result').innerText = 1;
    }else {
        display = Number(document.querySelector('#result').innerText += 1);
    }    
};

function two() {
    if (display === 0){
        display = document.querySelector('#result').innerText = 2;
    }else {
        display = Number(document.querySelector('#result').innerText += 2);
    }    
};

function three() {
    if (display === 0){
        display = document.querySelector('#result').innerText = 3;
    }else {
        display = Number(document.querySelector('#result').innerText += 3);
    }    
};

function four() {
    if (display === 0){
        display = document.querySelector('#result').innerText = 4;
    }else {
        display = Number(document.querySelector('#result').innerText += 4);
    }    
};

function five() {
    if (display === 0){
        display = document.querySelector('#result').innerText = 5;
    }else {
        display = Number(document.querySelector('#result').innerText += 5);
    }    
};

function six() {
    if (display === 0){
        display = document.querySelector('#result').innerText = 6;
    }else {
        display = Number(document.querySelector('#result').innerText += 6);
    }    
};

function seven() {
    if (display === 0){
        display = document.querySelector('#result').innerText = 7;
    }else {
        display = Number(document.querySelector('#result').innerText += 7);
    }    
};

function eight() {
    if (display === 0){
        display = document.querySelector('#result').innerText = 8;
    }else {
        display = Number(document.querySelector('#result').innerText += 8);
    }    
};

function nine() {
    if (display === 0){
        display = document.querySelector('#result').innerText = 9;
    }else {
        display = Number(document.querySelector('#result').innerText += 9);
    }    
};

function add() {
    firstNum = display;

    const equal = document.querySelector('.equal')
    
    equal.addEventListener('click', function() {
        
        secondNum = display;
        answer = firstNum + display;

        firstNum = 0;

        return display = Number(document.querySelector('#result').innerText = answer);

    });

    // equals)

    // function equals(a, b) {
    //     a = firstNum;
    //     b = display;
    //     answer = a + b
    //     firstNum = 0;
    //     return display = Number(document.querySelector('#result').innerText = answer);
        
    // }
    
    

}



console.log(display)
console.log(firstNum)
console.log(secondNum)
console.log(answer)

// function equal() {
//     secondNum = result;
// }




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
