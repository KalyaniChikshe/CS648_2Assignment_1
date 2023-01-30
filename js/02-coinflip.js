var coinFlip = Math.round(Math.random());
var choice;
var result = false;
choice = window.prompt("Enter your choice : Heads or Tails?");
if (coinFlip == 0){
    result = "Heads";
    if (result == choice){
        window.document.write ("The flip was heads and you chose heads...you win!")
    }else if (result != choice) {
        window.document.write ("The flip was heads but you chose tails...you lose!")
    }
}else if (coinFlip == 1 ){
    result = "Tails";
    if (result == choice){
        window.document.write ("The flip was tails and you chose tails...you win!")
    }else if (result != choice) {
        window.document.write ("The flip was tails but you chose heads...you lose!")
    }
}