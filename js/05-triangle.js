var i, j;
var triangle = "";

for (i=0; i<8; i+=1){
    for (j=0; j<i; j+=1){
        triangle += "#";
    }
    triangle += "<br>";
}

window.document.write(triangle);