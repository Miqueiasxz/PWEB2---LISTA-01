let exame_01 = 80;
let exame_02 = 70;
let exame_03 = 90;
let exame_04 = 90;
let exame_05 = 60;



if (exame_01>=70 && exame_02>=70 && exame_03>=70 && exame_04>=70 &&exame_05>70){
    document.write("A - PASSOU EM TODOS OS EXAMES");
}
else if (exame_01>=70 && exame_02>=70 && exame_03<70 && exame_04>=70 &&exame_05<70){
    document.write("B - PASSOU NOS EXAMES 01,02,04 e NÂO PASSOU NOS EXAMES 03 e 05");
}
else if (exame_01>=70 && exame_02>=70 && exame_03>=70 && exame_04>=70 &&exame_05<70){
    document.write("C - PASSOU NOS EXAMES 01,02,03,04 ENTRETANTO NÂO PASSOU NO EXAME 05");
}
else{
    document.write("D -  REPROVADO EM TODOS OS EXAMES");
}
