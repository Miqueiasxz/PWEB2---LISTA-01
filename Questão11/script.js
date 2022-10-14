let a = 12;
let b = 2;
let c = 15;
let soma;

if (a>b && b>c){
    soma= a+b;
    document.write("A SOMA DOS 2 MAIORES É = ", soma);
}

else if(a>b && c>b){
    soma= a+c;
    document.write("A SOMA DOS 2 MAIORES É = ", soma);
}

else if(b>c && c>a){
    soma= b+c;
    document.write("A SOMA DOS 2 MAIORES É = ", soma);
}

else{
    document.write("ERRO!");
}
