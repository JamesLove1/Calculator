//TESTS
//.style.cssText = "color:red"
// .style.cssText = "padding: 5%; background-color:red"

//CODE

//varables - HTML Elements 
let input = document.getElementsByTagName("input")[0];

let btn1 = document.getElementsByTagName("button")[4];
let btn2 = document.getElementsByTagName("button")[5];
let btn3 = document.getElementsByTagName("button")[6];
let btn4 = document.getElementsByTagName("button")[8];
let btn5 = document.getElementsByTagName("button")[9];
let btn6 = document.getElementsByTagName("button")[10];
let btn7 = document.getElementsByTagName("button")[12];
let btn8 = document.getElementsByTagName("button")[13];
let btn9 = document.getElementsByTagName("button")[14];
let btn0 = document.getElementsByTagName("button")[17];

let btnPluse = document.getElementsByTagName("button")[3];
let btnMinus = document.getElementsByTagName("button")[11];
let btnTimes = document.getElementsByTagName("button")[15];
let btnDivide = document.getElementsByTagName("button")[7];
let btnDot = document.getElementsByTagName("button")[16]; 
let btnEquals = document.getElementsByTagName("button")[18];
let btnClear = document.getElementsByTagName("button")[0];
let btnOpenBracket = document.getElementsByTagName("button")[1];
let btnCloseBracket = document.getElementsByTagName("button")[2];
let results_p = document.getElementsByTagName("p")[0];

//answerbox 
results_p.innerHTML = "Answer: "

//Add Numbers to num array so that it can be prosessed
btn1.addEventListener("click", a => {input.value += 1; });
btn2.addEventListener("click", a => {input.value += 2; });
btn3.addEventListener("click", a => {input.value += 3; });
btn4.addEventListener("click", a => {input.value += 4; });
btn5.addEventListener("click", a => {input.value += 5; });
btn6.addEventListener("click", a => {input.value += 6; });
btn7.addEventListener("click", a => {input.value += 7; });
btn8.addEventListener("click", a => {input.value += 8; });
btn9.addEventListener("click", a => {input.value += 9; });
btn0.addEventListener("click", a => {input.value += 0; });

btnOpenBracket.addEventListener("click", a => { input.value += "("; });
btnCloseBracket.addEventListener("click", a => { input.value += ")"; });
btnPluse.addEventListener("click", a =>{input.value += "+"; });
btnMinus.addEventListener("click", a =>{input.value += "-"; });
btnClear.addEventListener("click", a =>{window.location.reload();});
btnTimes.addEventListener("click", a =>{input.value += "*"; });
btnDivide.addEventListener("click",a =>{input.value += "/"; });
btnDot.addEventListener("click",   a =>{input.value += "."; });
btnEquals.addEventListener("click",a =>{results_p.innerHTML = "Answer: " + String(eval(input.value));});