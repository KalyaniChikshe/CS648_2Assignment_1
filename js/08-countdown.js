var i;
var number;
number = parseInt(window.prompt("Enter a count down number:"));

for (i=number; i>=0; i-=1){
    window.document.write(i + "<br>");
}