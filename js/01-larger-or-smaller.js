var num1;
var num2;

num1 = parseFloat(window.prompt("Enter the firrst number : "));
num2 = parseFloat(window.prompt("Enter the second number : "));

if (num1 > num2){
    window.document.write(num1 + " is larger number.");
}else if (num1 < num2){
    window.document.write(num2 + " is larger number.");
}else if (num1 === num2){
    window.document.write("nubers are equal.");
}