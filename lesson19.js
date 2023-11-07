// Write a programe to create a calc 
// ->Addition
// ->subtraction
// ->mutliplication
// ->division
// ->max
// ->min
// ->equality ( === )

var number1 = document.getElementById("num1").value;
var number2 = document.getElementById("num2").value;
var answer = ``;
function add()
{
    let n1 = parseInt(number1);
    let n2 = parseInt(number2);
    answer = n1 + n2 ;
    document.getElementById("Answer").innerHTML = answer;
}
function sub()
{
    let n1 = parseInt(number1);
    let n2 = parseInt(number2);
    answer = n1 - n2 ;
    document.getElementById("Answer").innerHTML = answer;
}
function multi()
{
    let n1 = parseInt(number1);
    let n2 = parseInt(number2);
    answer = n1 * n2 ;
    document.getElementById("Answer").innerHTML = answer;
}
function div()
{
    let n1 = parseInt(number1);
    let n2 = parseInt(number2);
    answer = n1 / n2 ;
    document.getElementById("Answer").innerHTML = answer;
}
function max()
{
    let n1 = parseInt(number1);
    let n2 = parseInt(number2);
    if(n1>n2)
    {
        document.getElementById("Answer").innerHTML = `${n1} is greater `;
    }
    else
    {
        document.getElementById("Answer").innerHTML = `${n2} is greater`;
    }
}
function min()
{
    let n1 = parseInt(number1);
    let n2 = parseInt(number2);
    if(n1<n2)
    {
        document.getElementById("Answer").innerHTML = `${n1} is smaller `;
    }
    else
    {
        document.getElementById("Answer").innerHTML = `${n2} is smaller`;
    }
}
function equal()
{
    if(number1 === number2)
    {
        document.getElementById("Answer").innerHTML = "Both are equal";
    }
    else
    {
        document.getElementById("Answer").innerHTML = "Both not are equal";
    }
}