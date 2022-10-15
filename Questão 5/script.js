let a = 14;
let b = 8;
resto = 1;
if(a>=b){
 while(resto !=0){
     resto =a%b;
     a=b;
     b=resto;
 }
}
