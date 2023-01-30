var coinFlip;

do{
    coinFlip = Math.round(Math.random());
    if(coinFlip == 0){
        window.document.write("Heads");
    }else if (coinFlip == 1){
        window.document.write("Tails");
    }
}while(coinFlip == 0);