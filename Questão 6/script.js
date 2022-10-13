let a = 8;
let b = 5;
let c = 10;

if (a<b && b<c){
    document.write("A ordem Crescente e: " , a +"-"+ b +"-"+ c);
}

else if(a<c && c<b){
    document.write("A ordem Crescente e: " , a +"-"+ c +"-"+ b);
}

else if(b<a && a<c){
    document.write("A ordem Crescente e: " , b +"-"+ a +"-"+ c);
}


else if(b<c && c<a){
    document.write("A ordem Crescente e: " , b +"-"+ c +"-"+ a);
}


else if(c<a && a<b){
    document.write("A ordem Crescente e: ", c +"-"+ a +"-"+ b);
}

else {
    document.write("A ordem Crescente e: ", c +"-"+ b +"-"+ a);
}

