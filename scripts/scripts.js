//TESTS
//.style.cssText = "color:red"
// .style.cssText = "padding: 5%; background-color:red"

//CODE

//varables - HTML Elements 
let input = document.getElementsByTagName("input")[0];

let btn1 = document.getElementsByTagName("button")[0];
let btn2 = document.getElementsByTagName("button")[1];
let btn3 = document.getElementsByTagName("button")[2];
let btn4 = document.getElementsByTagName("button")[4];
let btn5 = document.getElementsByTagName("button")[5];
let btn6 = document.getElementsByTagName("button")[6];
let btn7 = document.getElementsByTagName("button")[8];
let btn8 = document.getElementsByTagName("button")[9];
let btn9 = document.getElementsByTagName("button")[10];
let btn0 = document.getElementsByTagName("button")[13];

let btnPluse = document.getElementsByTagName("button")[3];
let btnMinus = document.getElementsByTagName("button")[7];
let btnTimes = document.getElementsByTagName("button")[11];
let btnDivide = document.getElementsByTagName("button")[14];
let btnDot = document.getElementsByTagName("button")[15]; 
let btnEquals = document.getElementsByTagName("button")[16];
let btnClear = document.getElementsByTagName("button")[12];
let results_p = document.getElementsByTagName("p")[0];

//varables for calculations

//List of numbers as well as indecise of eqauls and operator
let num = [];
let equals;
let operator;
//let operator_sign = num[operator];

let num1 = String([]);
let num2 = String([]);

let num1_v2 = Number();
let num2_v2 = Number();

let result = Number();

//answerbox 
results_p.innerHTML = "Answer: "

//Add Numbers to num array so that it can be prosessed
btn1.addEventListener("click", a => { num.push(1); input.value += 1; });
btn2.addEventListener("click", a => { num.push(2); input.value += 2; });
btn3.addEventListener("click", a => { num.push(3); input.value += 3; });
btn4.addEventListener("click", a => { num.push(4); input.value += 4; });
btn5.addEventListener("click", a => { num.push(5); input.value += 5; });
btn6.addEventListener("click", a => { num.push(6); input.value += 6; });
btn7.addEventListener("click", a => { num.push(7); input.value += 7; });
btn8.addEventListener("click", a => { num.push(8); input.value += 8; });
btn9.addEventListener("click", a => { num.push(9); input.value += 9; });
btn0.addEventListener("click", a => { num.push(0); input.value += 0; });

btnPluse.addEventListener("click", a => { num.push("+"); input.value += "+"; });
btnMinus.addEventListener("click", a => { num.push("-"); input.value += "-"; });
btnClear.addEventListener("click", a => { window.location.reload(); });
btnTimes.addEventListener("click", a => { num.push("x"); input.value += "x"; });
btnDivide.addEventListener("click", a => { num.push("/"); input.value += "/"; });
btnDot.addEventListener("click", a => { num.push("."); input.value += "."; });
btnEquals.addEventListener("click", a => {
    num.push("=");

    //ability for calculator to add subtract, times and divide
    function add(num1_v2, num2_v2) {
        result = num1_v2 + num2_v2;
        console.log(num1_v2, num2_v2, result)
        return result;
    }

    function subtract(num1_v2, num2_v2) {
        result = num1_v2 - num2_v2;
        console.log(num1_v2, "-" ,num2_v2, result)
        return result;
    }

    function times(num1_v2, num2_v2) {
        result = num1_v2 * num2_v2;
        console.log(num1_v2, "x", num2_v2, result)
        return result;
    }

    function divide(num1_v2, num2_v2) {
        result = num1_v2 / num2_v2;
        console.log(num1_v2, "/", num2_v2, result)
        return result;
    }

    //set Equals and Operator Varables
    for (i = 0; i < num.length; i++) {
        //console.log(i);
        if (num[i] === '=') {
            equals = i;
        } else if (num[i] === '+') {
            operator = i;
        } else if (num[i] === '-') {
            operator = i;
        } else if (num[i] === 'x') {
            operator = i;
        } else if (num[i] === '/') {
            operator = i;
        } else {
            //  console.log("could not find operator or equals")

        }
    }

    // asign values to varable num1 and num2 
    for (i = 0; i < num.length; i++) {
        //console.log(i);
        if (i < operator) {
            num1 += num[i];

        } else if (i > operator && i != equals) {
            num2 += num[i];

        } else {
            //console.log("Could not find num 1 or num 2");
        }
    };

    num1_v2 = Number(num1);
    num2_v2 = Number(num2);

    switch (num[operator]) {
        case "+":
            console.log(add(num1_v2,num2_v2));
            break;
        case "-":
            subtract(num1_v2, num2_v2);
            break;
        case "/":
            divide(num1_v2, num2_v2);
            break;
        case "x":
            times(num1_v2, num2_v2);
            break;
        default:
            console.log("error");
    }

    console.log("Answer: ", results_p.innerHTML = "Answer: " + String(result));
});