let i, prod;
let n = parseInt(prompt("Digite o valor de N: "));
prod = 1;
i=1;
while(prod<n){
    prod = i * (i+1)*(i+2);
    i = i +1;
}
i= i -1 ;
if(prod == n){
    document.write("Este Número é Triangular: ",n," = ",i," x ",i+1," x ",i+2);
}else{
    document.write("Este Número não é Triangular");
}