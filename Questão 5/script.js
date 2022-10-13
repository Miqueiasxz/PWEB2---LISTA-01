let a = 18;
let b = 12;
resto = 1;
if(a>=b){
 while(resto !=0){
     resto =a%b;
     a=b;
     b=resto;
 }
}
