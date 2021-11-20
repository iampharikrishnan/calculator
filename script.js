//Variable declaration
let equation = "";

//function that display value
function dis(val)
{
    equation+=val;
    document.getElementById("result").value = equation;
}
  
//function that evaluates the digit and return result
function solve()
{
    equation = eval(equation);
    document.getElementById("result").value = equation;
}

function neg() {
    equation = `-(${equation})`;
    document.getElementById("result").value = equation;
}
  
//function that clear the display
function clr()
{
    equation = "";
    document.getElementById("result").value = equation;
}